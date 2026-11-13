import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { inquirySchema } from "@/lib/contact-validation";

type InquiryResult = { ok: true } | { ok: false; message: string };

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => input)
  .handler(async ({ data }): Promise<InquiryResult> => {
    const parsed = inquirySchema.safeParse(data);
    if (!parsed.success) {
      const first = parsed.error.issues[0];
      return { ok: false, message: first?.message ?? "Please check the details and try again." };
    }

    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabasePublic = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
      // Opaque sb_ keys aren't JWTs; send only apikey, not the default Authorization bearer.
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
            headers.delete("Authorization");
          }
          headers.set("apikey", key);
          return fetch(input, { ...init, headers });
        },
      },
    });

    const { error } = await supabasePublic.from("contact_submissions").insert(parsed.data);
    if (error) {
      console.error("contact submission insert failed", error.message);
      return { ok: false, message: "We couldn't send your inquiry just now. Please try again." };
    }

    return { ok: true };
  });
