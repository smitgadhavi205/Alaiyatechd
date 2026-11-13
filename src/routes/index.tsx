import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Layers3,
  Menu,
  Monitor,
  MousePointer2,
  Workflow,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitInquiry } from "@/lib/contact.functions";
import workArtwork from "@/assets/alaiya-digital-work.jpg";
import harshilReviewImage from "@/assets/harshil-salon-crm.png";
import furnitureReviewImage from "@/assets/best-furniture.png";
import saiReviewImage from "@/assets/sai-computers.png";
import alaiyaHubReviewImage from "@/assets/alaiyahub.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alaiya Technologies — Digital Products That Move Business Forward" },
      {
        name: "description",
        content:
          "Alaiya Technologies designs and builds business websites, custom software, CRM systems, and digital products for growing businesses.",
      },
      {
        property: "og:title",
        content: "Alaiya Technologies — Digital Products That Move Business Forward",
      },
      {
        property: "og:description",
        content:
          "Thoughtful websites, useful business software, and digital products built around the way your business works.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Our work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
];

const services = [
  {
    number: "01",
    title: "Websites that work harder.",
    description:
      "Modern, responsive websites that make a strong first impression and make it easier for customers to take the next step.",
    icon: Monitor,
    detail: "Website design & development",
  },
  {
    number: "02",
    title: "Software made for your business.",
    description:
      "Purpose-built business applications that turn complicated everyday processes into clear, manageable workflows.",
    icon: Braces,
    detail: "Custom software development",
  },
  {
    number: "03",
    title: "Less busywork. More momentum.",
    description:
      "Bring customers, appointments, sales, and day-to-day operations into a system that works together.",
    icon: Workflow,
    detail: "CRM & business automation",
  },
  {
    number: "04",
    title: "Your idea, ready for the real world.",
    description:
      "Turn a promising product idea into a thoughtful, useful web application built to grow with you.",
    icon: Layers3,
    detail: "Digital product development",
  },
];

const projects = [
  {
    id: "salon-crm",
    name: "Harshil Salon",
    product: "Salon CRM software",
    category: "Software",
    description:
      "A salon management solution for organizing customer records, appointments, services, and the daily details of running the business.",
    image: harshilReviewImage,
  },
  {
    id: "best-furniture",
    name: "Best Furniture",
    product: "Furniture showcase website",
    category: "Website",
    description:
      "A product-led furniture experience designed to bring collections together and help customers discover the right pieces.",
    image: furnitureReviewImage,
  },
  {
    id: "sai-computers",
    name: "Sai Computers Bardoli",
    product: "Technology business website",
    category: "Website",
    description:
      "A professional online presence for technology products, services, and essential business information.",
    image: saiReviewImage,
  },
  {
    id: "alaiyahub",
    name: "AlaiyaHub",
    product: "CRM software",
    category: "Software",
    description:
      "A CRM product that brings bookings, revenue, customers, and staff information into one place for growing businesses.",
    image: alaiyaHubReviewImage,
  },
];

const reviews = [
  {
    id: "harshil-salon",
    name: "Harshil Salon",
    product: "Salon CRM Software",
    image: harshilReviewImage,
    quote:
      "The CRM software has made managing our salon much easier. We can keep track of customers, appointments, and daily activities in one place. Alaiya Technologies understood what our business needed and built a solution that is simple and practical to use.",
  },
  {
    id: "best-furniture",
    name: "Best Furniture",
    product: "Furniture Showcase Website",
    image: furnitureReviewImage,
    quote:
      "We wanted a website that could showcase our furniture collections in a clean and attractive way. Alaiya Technologies delivered a modern design that presents our products beautifully and makes it easy for customers to explore what we offer.",
  },
  {
    id: "sai-computers",
    name: "Sai Computers Bardoli",
    product: "Technology Business Website",
    image: saiReviewImage,
    quote:
      "We needed a professional website to showcase our computer products and services. Alaiya Technologies created a clean, user-friendly website that represents our business well and makes it easier for customers to learn about our offerings.",
  },
  {
    id: "alaiyahub",
    name: "AlaiyaHub",
    product: "CRM Software",
    image: alaiyaHubReviewImage,
    quote: "Good work by Alaiya Technologies.",
  },
];

const process = [
  { number: "01", title: "Discover", text: "Understand your business, challenges, and goals." },
  { number: "02", title: "Design", text: "Plan a clear, considered experience around your needs." },
  { number: "03", title: "Develop", text: "Build and test a reliable solution, together." },
  { number: "04", title: "Launch & support", text: "Get your product out there and help it keep growing." },
];

const filters = ["All projects", "Websites", "Software"] as const;
type ProjectFilter = (typeof filters)[number];

function HomePage() {
  const [filter, setFilter] = useState<ProjectFilter>("All projects");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const sendInquiry = useServerFn(submitInquiry);

  useEffect(() => {
    if (!selectedProject) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedProject]);

  const filteredProjects = projects.filter((project) => {
    if (filter === "All projects") return true;
    if (filter === "Websites") return project.category === "Website";
    return project.category === filter;
  });

  async function handleInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    setIsSending(true);
    const result = await sendInquiry({ data: values });
    setIsSending(false);
    if (result.ok) {
      form.reset();
      setFormMessage("Thanks — your inquiry has been sent and saved.");
    } else {
      setFormMessage(result.message);
    }
  }

  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#home" aria-label="Alaiya Technologies home">
            <span className="brand-symbol" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-name">
              ALAIYA <span>TECHNOLOGIES</span>
            </span>
          </a>

          <nav className={`main-navigation${mobileMenuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <Button asChild className="nav-mobile-cta" size="sm">
              <a href="#contact">Let’s talk <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          </nav>

          <Button asChild className="nav-cta" size="sm">
            <a href="#contact">Let’s talk <ArrowUpRight aria-hidden="true" /></a>
          </Button>
          <Button
            className="menu-toggle"
            size="icon"
            variant="ghost"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      <section className="hero-section" id="home">
        <img className="hero-artwork" src={workArtwork} alt="Conceptual software, booking, and product website interface studies" width={1536} height={1024} fetchPriority="high" />
        <div className="hero-wash" />
        <div className="hero-inner page-width">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-light"><span className="status-dot" /> DESIGN <span>·</span> DEVELOP <span>·</span> INNOVATE</div>
            <h1>Digital experiences that <span>move business forward.</span></h1>
            <p>
              From memorable websites to intelligent business software, we turn ideas into useful digital products.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg" className="button-electric">
                <a href="#work">Explore our work <ArrowDownRight aria-hidden="true" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="button-quiet">
                <a href="#contact">Start a project <ArrowUpRight aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
          <div className="hero-art-caption">
            <span className="caption-line" />
            <span>Ideas, shaped into useful things.</span>
          </div>
          <a className="hero-scroll" href="#services" aria-label="Scroll to services"><span>SCROLL TO EXPLORE</span><ArrowDownRight aria-hidden="true" /></a>
        </div>
      </section>

      <section className="services-section section-padding" id="services">
        <div className="page-width">
          <div className="section-heading services-heading">
            <div>
              <p className="eyebrow"><span>01</span> WHAT WE DO</p>
              <h2>Everything your business needs <span>to go digital.</span></h2>
            </div>
            <p className="heading-aside">Good technology should make the everyday feel easier. We build around the way your business really works.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-item" key={service.number}>
                  <div className="service-topline"><span>{service.number}</span><Icon aria-hidden="true" /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-detail">{service.detail}<ArrowUpRight aria-hidden="true" /></span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="work-section section-padding" id="work">
        <div className="page-width">
          <div className="section-heading work-heading">
            <div>
              <p className="eyebrow"><span>02</span> SELECTED WORK</p>
              <h2>Real projects. <span>Real business solutions.</span></h2>
            </div>
            <p className="heading-aside">Real websites and software, built around the day-to-day needs of the businesses behind them.</p>
          </div>
          <div className="work-toolbar">
            <div className="project-count" aria-live="polite">{String(filteredProjects.length).padStart(2, "0")} PROJECTS</div>
            <div className="filter-list" aria-label="Filter projects">
              {filters.map((choice) => (
                <Button
                  key={choice}
                  size="sm"
                  variant={filter === choice ? "default" : "ghost"}
                  className={filter === choice ? "filter-active" : "filter-button"}
                  aria-pressed={filter === choice}
                  onClick={() => setFilter(choice)}
                >
                  {choice}
                </Button>
              ))}
            </div>
          </div>
          <div className="project-grid" aria-live="polite">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} onOpen={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-section section-padding" id="reviews">
        <div className="page-width">
          <div className="section-heading reviews-heading">
            <div>
              <p className="eyebrow"><span>03</span> CLIENT RELATIONSHIPS</p>
              <h2>Built with trust. <span>Backed by relationships.</span></h2>
            </div>
          </div>
          <div className="review-grid" aria-live="polite">
            {reviews.map((review, index) => (
              <article className="review-item" key={review.id}>
                <img className="review-image" src={review.image} alt={`${review.name} project screenshot`} loading="lazy" />
                <div className="review-monogram">{review.name.slice(0, 1)}</div>
                <span className="review-project-number">CLIENT REVIEW&nbsp; / &nbsp;{String(index + 1).padStart(2, "0")}</span>
                <h3>{review.name}</h3>
                <p className="review-product">{review.product}</p>
                <p className="review-quote">“{review.quote}”</p>
                <span className="review-divider" />
                <span className="review-kind">ALAIYA TECHNOLOGIES</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section-padding" id="about">
        <div className="page-width about-layout">
          <div className="about-copy">
            <p className="eyebrow"><span>04</span> A LITTLE ABOUT US</p>
            <h2>Technology should make <span>business simpler.</span></h2>
            <p className="about-description">
              At Alaiya Technologies, we believe every business deserves technology that works for them. We combine thoughtful design, practical development, and a deep understanding of business needs to create solutions that are useful, intuitive, and built for growth.
            </p>
            <div className="expertise-list">
              {["Modern web development", "Business software", "UI/UX design", "Workflow automation", "UDYAM / MSME Certified"].map((item) => (
                <span key={item}><Check aria-hidden="true" />{item}</span>
              ))}
            </div>
          </div>
          <div className="about-visual">
            <img src={workArtwork} alt="Conceptual digital product screens composed for Alaiya Technologies" width={1536} height={1024} loading="lazy" />
            <div className="visual-index"><span>ALAIYA / STUDIO</span><span>DESIGN × TECHNOLOGY</span></div>
            <div className="visual-stamp"><MousePointer2 aria-hidden="true" /><span>MADE TO<br />MAKE SENSE</span></div>
            <div className="visual-footer"><span>THOUGHTFUL BY DESIGN</span><ArrowDownRight aria-hidden="true" /></div>
          </div>
        </div>
      </section>

      <section className="process-section section-padding" id="process">
        <div className="page-width">
          <div className="section-heading process-heading">
            <div>
              <p className="eyebrow"><span>05</span> HOW WE WORK</p>
              <h2>From your idea <span>to a working product.</span></h2>
            </div>
            <p className="heading-aside">Good work happens when everyone knows what comes next. Here’s how we get there, together.</p>
          </div>
          <div className="process-grid">
            {process.map((step) => (
              <article className="process-step" key={step.number}>
                <div className="process-marker"><span>{step.number}</span><span className="process-node" /></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="page-width contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light"><span>06</span> YOUR NEXT CHAPTER</p>
            <h2>Have an idea?<br /><span>Let’s build something great.</span></h2>
            <p>Whether you need a business website, a custom CRM, or a completely new software product, we’re ready to hear what you have in mind.</p>
            <p className="mt-3 text-sm text-neutral-300">
              Or reach out directly at{" "}
              <a href="mailto:smit44787@gmail.com" className="font-medium text-white underline underline-offset-4 hover:opacity-80">
                smit44787@gmail.com
              </a>
            </p>
            <div className="contact-signoff"><span className="status-dot" /> GOOD THINGS START WITH A CONVERSATION</div>
          </div>
          <form className="inquiry-form" onSubmit={handleInquiry} onChange={() => setFormMessage("")}>
            <div className="form-heading"><span>PROJECT INQUIRY</span><span>TAKES A FEW MINUTES</span></div>
            <div className="form-fields">
              <label>Full name<input autoComplete="name" name="name" placeholder="Your name" required /></label>
              <label>Email address<input autoComplete="email" name="email" type="email" placeholder="you@company.com" required /></label>
              <label>Business name<input autoComplete="organization" name="business" placeholder="Your business" required /></label>
              <label>What can we help with?
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  <option>Website design & development</option>
                  <option>Custom software development</option>
                  <option>CRM & business automation</option>
                  <option>Digital product development</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="form-description">Tell us a little about your project<textarea name="description" placeholder="What are you hoping to build?" rows={3} required /></label>
            </div>
            <div className="form-submit-row">
              <Button type="submit" className="button-electric" size="lg" disabled={isSending}>
                {isSending ? "Sending" : "Send inquiry"} <ArrowUpRight aria-hidden="true" />
              </Button>
              <span>YOUR PROJECT STARTS HERE</span>
            </div>
            {formMessage && <p className="form-status" role="status">{formMessage}</p>}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width">
          <div className="footer-main">
            <a className="brand footer-brand" href="#home" aria-label="Alaiya Technologies home">
              <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
              <span className="brand-name">ALAIYA <span>TECHNOLOGIES</span></span>
            </a>
            <p>Building digital solutions<br />for tomorrow.</p>
            <div className="footer-cert" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "9999px", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", fontSize: "10px", color: "#34d399", fontWeight: 600, letterSpacing: "0.06em", marginTop: "10px", width: "fit-content" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", display: "inline-block" }}></span>
              <span>UDYAM / MSME CERTIFIED ENTERPRISE</span>
            </div>
            <div className="footer-links"><span>EXPLORE</span>{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
            <div className="footer-links"><span>OUR SERVICES</span>{services.map((service) => <a key={service.number} href="#services">{service.detail}</a>)}</div>
            <a className="footer-contact" href="mailto:smit44787@gmail.com">Have a project in mind? <span>smit44787@gmail.com <ArrowUpRight aria-hidden="true" /></span></a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} ALAIYA TECHNOLOGIES</span>
            <span style={{ color: "#34d399", fontWeight: 700, letterSpacing: "0.08em" }}>✓ UDYAM / MSME CERTIFIED</span>
            <span>MADE WITH INTENTION.</span>
            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div className="project-dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}>
          <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
            <Button className="dialog-close" size="icon" variant="ghost" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X /></Button>
            <ProjectPreview project={selectedProject} />
            <div className="dialog-copy">
              <p className="eyebrow">{selectedProject.category} <span>·</span> REAL PROJECT</p>
              <h2 id="project-dialog-title">{selectedProject.name}</h2>
              <h3>{selectedProject.product}</h3>
              <p>{selectedProject.description}</p>
              <Button variant="outline" onClick={() => setSelectedProject(null)}>Close preview <ArrowRight aria-hidden="true" /></Button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

function ProjectCard({ project, index, onOpen }: { project: (typeof projects)[number]; index: number; onOpen: () => void }) {
  return (
    <article className="project-card">
      <button className="project-preview-button" type="button" onClick={onOpen} aria-label={`View ${project.name} — ${project.product}`}>
        <ProjectPreview project={project} />
        <span className="preview-overlay"><span>VIEW PROJECT</span><ArrowUpRight aria-hidden="true" /></span>
      </button>
      <div className="project-info">
        <div><span className="project-category">{project.category} <span>·</span> SELECTED WORK</span><h3>{project.name}</h3><p>{project.product}</p></div>
        <Button size="icon" variant="ghost" onClick={onOpen} aria-label={`View ${project.name} project details`}><ArrowUpRight /></Button>
      </div>
    </article>
  );
}

function ProjectPreview({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="project-preview">
      <img className="project-preview-image" src={project.image} alt="" loading="lazy" />
    </div>
  );
}