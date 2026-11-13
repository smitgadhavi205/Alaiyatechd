import { describe, expect, it } from "vitest";

import { inquirySchema } from "@/lib/contact-validation";

const validInquiry = {
  name: "Test Submission",
  email: "test@example.com",
  business: "Test Business Co",
  service: "CRM & business automation",
  description: "Verifying that inquiries are stored.",
};

describe("Project inquiry validation", () => {
  it("accepts a complete inquiry", () => {
    expect(inquirySchema.safeParse(validInquiry).success).toBe(true);
  });

  it("rejects a project description longer than 2000 characters", () => {
    const result = inquirySchema.safeParse({
      ...validInquiry,
      description: "x".repeat(2500),
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toBe(
      "Please keep your project details under 2000 characters.",
    );
  });

  it("rejects an email address that is not a valid address", () => {
    const result = inquirySchema.safeParse({ ...validInquiry, email: "not-an-email" });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toBe("Please enter a valid email address.");
  });

  it("rejects a service outside the offered list", () => {
    expect(inquirySchema.safeParse({ ...validInquiry, service: "Free hosting" }).success).toBe(
      false,
    );
  });
});
