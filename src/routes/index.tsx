import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Box,
  Braces,
  Briefcase,
  Camera,
  Check,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  Headphones,
  Home,
  Info,
  Layers,
  Layers3,
  LayoutGrid,
  Leaf,
  Mail,
  Menu,
  MessageSquareCode,
  Monitor,
  MousePointer2,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitInquiry } from "@/lib/contact.functions";
import workArtwork from "@/assets/alaiya-digital-work.jpg";
import harshilReviewImage from "@/assets/harshil-salon-crm.png";
import khusbuReviewImage from "@/assets/khusbu-cosmetics.jpg";
import saiReviewImage from "@/assets/sai-computers.png";
import alaiyaHubReviewImage from "@/assets/alaiyahub.png";
import udyamBadgeImage from "@/assets/udyam-badge-2x.png";

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
  { label: "Products", href: "/products" },
  { label: "Our work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faq" },
];

const footerExplore = [
  { label: "Services", href: "#services", icon: Home },
  { label: "Products", href: "/products", icon: Box },
  { label: "Our Work", href: "#work", icon: Layers },
  { label: "Reviews", href: "#reviews", icon: Users },
  { label: "About", href: "#about", icon: Info },
  { label: "FAQs", href: "#faq", icon: FileText },
  { label: "Help & Support", href: "mailto:smit44787@gmail.com", icon: Headphones },
];

const footerServices = [
  { label: "AlaiyaHub & Custom CRM", href: "/products", icon: LayoutGrid },
  { label: "Industry Portals (Salon, CA, Photo)", href: "/products", icon: Sparkles },
  { label: "Alaiya Auth & Security", href: "/products", icon: ShieldCheck },
  { label: "WhatsApp CRM & Automation", href: "/products", icon: MessageSquareCode },
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
    id: "khusbu-cosmetics",
    name: "Khusbu Cosmetics",
    product: "Cosmetics & skincare e-commerce website",
    category: "Website",
    description:
      "A modern, high-conversion e-commerce storefront for science-backed skincare collections, featuring rich product storytelling, ingredient highlights, and seamless checkout.",
    image: khusbuReviewImage,
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
    id: "best-furniture",
    name: "Best Furniture",
    product: "Furniture Showcase & Catalog",
    quote:
      "We wanted a clean way to showcase our furniture collections online. The platform Alaiya Technologies delivered presents our pieces beautifully, loads fast, and makes it easy for customers to explore what we offer.",
  },
  {
    id: "khusbu-cosmetics",
    name: "Khusbu Cosmetics",
    product: "Cosmetics & Skincare E-Commerce Platform",
    quote:
      "Our online customer engagement and direct orders surged after launching our new skincare storefront. Alaiya Technologies delivered a sleek, fast, and visually stunning digital shopping experience that showcases our formulas perfectly.",
  },
  {
    id: "sai-computers",
    name: "Sai Computers Bardoli",
    product: "Technology Business Website & Inventory",
    quote:
      "We needed a professional digital presence to showcase our computer products and services. Alaiya Technologies created a clean, user-friendly platform that represents our business well and makes customer discovery effortless.",
  },
  {
    id: "harshil-salon",
    name: "Harshil Salon",
    product: "AlaiyaHub Salon CRM Platform",
    quote:
      "The CRM software has made managing our salon much easier. We can keep track of customers, appointments, and daily activities in one place. Alaiya Technologies understood what our business needed and built a solution that is simple and practical to use.",
  },
  {
    id: "sunils-studio",
    name: "Sunil's Studio",
    product: "Alaiya Photographer Suite",
    quote:
      "Delivering proof galleries to wedding clients used to take hours of manual uploads and watermarking. With Alaiya Photographer, clients pick their favorites directly online, and downloads are instant.",
  },
];

const process = [
  { number: "01", title: "Discover", text: "Understand your business, challenges, and goals." },
  { number: "02", title: "Design", text: "Plan a clear, considered experience around your needs." },
  { number: "03", title: "Develop", text: "Build and test a reliable solution, together." },
  { number: "04", title: "Launch & support", text: "Get your product out there and help it keep growing." },
];

const filters = ["All projects", "Products", "Websites", "Software"] as const;
const solutions = [
  { icon: Monitor, title: "Turn browsing into an inquiry.", audience: "FOR SHOPS & SERVICE BUSINESSES", text: "Give customers a clear place to explore your products, understand your services, and get in touch.", tags: ["Product catalogs", "Service pages", "Inquiry flows"] },
  { icon: Workflow, title: "Bring the daily details together.", audience: "FOR TEAMS & GROWING OPERATIONS", text: "Replace scattered spreadsheets with connected customer records, bookings, and workflows built around your team.", tags: ["Customer management", "Appointments", "Business dashboards"] },
  { icon: Layers3, title: "Make your next idea tangible.", audience: "FOR FOUNDERS & PRODUCT TEAMS", text: "Start with the essential user journey, shape a focused first release, and build a foundation you can develop further.", tags: ["Product discovery", "Interactive design", "Web applications"] },
];

const faqs = [
  { question: "What should I have ready before we talk?", answer: "A short description of your business, the problem you want to solve, and any websites or tools you like is a useful starting point. If you already have a logo, content, or an existing system, tell us about those too. You do not need a finished technical brief." },
  { question: "How are the scope and cost decided?", answer: "The scope depends on the pages, features, integrations, and content your project needs. We start by discussing those requirements so the proposed work, priorities, and costs can be agreed before development begins." },
  { question: "Can you improve an existing website or workflow?", answer: "Yes. Share what you currently use and where it falls short. We can review the experience and discuss whether targeted improvements or a new build would better address your goals." },
  { question: "How long will my project take?", answer: "Timing depends on the size of the project, the readiness of your content, and the complexity of the features. We discuss milestones after discovery, including time for your feedback and testing before launch." },
  { question: "What happens after launch?", answer: "We can discuss ongoing support, fixes, and future improvements as part of the project scope. Share your maintenance needs early so responsibilities and the level of support are clear before handover." },
];
type ProjectFilter = (typeof filters)[number];

function HomePage() {
  const [filter, setFilter] = useState<ProjectFilter>("All projects");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isMobileReviews, setIsMobileReviews] = useState(false);
  const sendInquiry = useServerFn(submitInquiry);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileReviews(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxReviewIndex = isMobileReviews ? reviews.length - 1 : Math.max(0, reviews.length - 2);

  const handlePrevReview = () => {
    setReviewIndex((prev) => (prev <= 0 ? maxReviewIndex : prev - 1));
  };

  const handleNextReview = () => {
    setReviewIndex((prev) => (prev >= maxReviewIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!selectedProject) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedProject]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (filter === "All projects") return true;
    if (filter === "Products") return project.category === "Software" || project.id === "alaiyahub" || project.id === "salon-crm";
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

      <div className="studio-band">
        <div className="page-width studio-band-inner">
          <span className="studio-band-label">BUILT AROUND YOUR BUSINESS</span>
          <span><Check aria-hidden="true" /> Thoughtful design</span>
          <span><Check aria-hidden="true" /> Practical development</span>
          <span><Check aria-hidden="true" /> Room to grow</span>
        </div>
      </div>

      <section className="services-section section-padding reveal-on-scroll" id="services">
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

      <section className="solutions-section section-padding reveal-on-scroll" id="solutions">
        <div className="page-width">
          <div className="section-heading">
            <div><p className="eyebrow">A BETTER EVERYDAY</p><h2>Start with a challenge.<br /><span>Build toward a possibility.</span></h2></div>
            <p className="heading-aside">A beautiful interface is only the beginning. The real value is in what it helps your customers and your team do next.</p>
          </div>
          <div className="solutions-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return <article className="solution-card" key={solution.title}>
                <div className="solution-icon"><Icon aria-hidden="true" /></div>
                <p className="solution-audience">{solution.audience}</p>
                <h3>{solution.title}</h3><p>{solution.text}</p>
                <ul>{solution.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <a href="#contact">Talk through your idea <ArrowUpRight aria-hidden="true" /></a>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="work-section section-padding reveal-on-scroll" id="work">
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

      <section className="reviews-section section-padding reveal-on-scroll" id="reviews">
        <div className="page-width">
          <div className="section-heading reviews-heading">
            <div>
              <p className="eyebrow"><span>03</span> CLIENT RELATIONSHIPS</p>
              <h2>Built with trust. <span>Backed by relationships.</span></h2>
            </div>
            <div className="carousel-controls">
              <span className="carousel-counter">
                {String(reviewIndex + 1).padStart(2, "0")} / {String(maxReviewIndex + 1).padStart(2, "0")}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevReview}
                aria-label="Previous review"
                className="carousel-btn"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextReview}
                aria-label="Next review"
                className="carousel-btn"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="review-carousel-container" aria-live="polite">
            <div
              className="review-carousel-track"
              style={{
                transform: `translateX(-${reviewIndex * (isMobileReviews ? 100 : 50)}%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div className="review-slide" key={review.id}>
                  <article className="review-item no-image-review">
                    <div className="review-card-header">
                      <div className="review-monogram">{review.name.slice(0, 1)}</div>
                      <div className="review-stars" aria-label="5 out of 5 stars">
                        <Star className="star-icon" fill="currentColor" stroke="none" />
                        <Star className="star-icon" fill="currentColor" stroke="none" />
                        <Star className="star-icon" fill="currentColor" stroke="none" />
                        <Star className="star-icon" fill="currentColor" stroke="none" />
                        <Star className="star-icon" fill="currentColor" stroke="none" />
                      </div>
                    </div>
                    <span className="review-project-number">
                      CLIENT REVIEW&nbsp; / &nbsp;{String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{review.name}</h3>
                    <span className="review-product-badge">{review.product}</span>
                    <p className="review-quote">“{review.quote}”</p>
                    <span className="review-divider" />
                    <div className="review-kind">
                      <span>ALAIYA TECHNOLOGIES</span>
                      <span className="review-verified-badge">VERIFIED CLIENT</span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-progress" aria-hidden="true">
            <span
              style={{
                width: `${100 / (maxReviewIndex + 1)}%`,
                transform: `translateX(${reviewIndex * 100}%)`,
              }}
            />
          </div>
        </div>
      </section>

      <section className="about-section section-padding reveal-on-scroll" id="about">
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

      <section className="process-section section-padding reveal-on-scroll" id="process">
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

      <section className="delivery-section reveal-on-scroll">
        <div className="page-width delivery-layout">
          <div><p className="eyebrow eyebrow-light">THE DETAILS MATTER</p><h2>A considered build.<br /><span>From first click to handover.</span></h2><a href="#contact">Let’s define your project <ArrowUpRight aria-hidden="true" /></a></div>
          <div className="delivery-grid">
            {[
              ["01", "Designed for real screens", "Layouts that adapt across mobile, tablet, and desktop, with clear navigation and readable content."],
              ["02", "Built around your priorities", "A focused scope that connects design decisions and product features to your business goals."],
              ["03", "Reviewed together", "Milestones for feedback, practical testing, and refinement before your product goes live."],
              ["04", "Ready for the next step", "A clear handover and a conversation about the support and improvements you may need next."],
            ].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="faq-section section-padding reveal-on-scroll" id="faq">
        <div className="page-width faq-layout">
          <div><p className="eyebrow">BEFORE WE BEGIN</p><h2>Good questions.<br /><span>Clear answers.</span></h2><p className="heading-aside">Every project starts with a conversation. Here are a few things you might be wondering about.</p><a className="faq-contact" href="#contact">Have a different question? <ArrowUpRight aria-hidden="true" /></a></div>
          <div className="faq-list">{faqs.map((faq, index) => <details key={faq.question}><summary><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><span>{faq.question}</span><span className="faq-toggle" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="contact-section reveal-on-scroll" id="contact">
        <div className="page-width contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light"><span>06</span> YOUR NEXT CHAPTER</p>
            <h2>Have an idea?<br /><span>Let’s build something great.</span></h2>
            <p>Whether you need a business website, a custom CRM, or a completely new software product, we’re ready to hear what you have in mind.</p>
            
            <div className="contact-channels" style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px", padding: "16px", borderRadius: "6px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ color: "rgba(255, 255, 255, 0.65)" }}>Email Inquiries:</span>
                <a href="mailto:smit44787@gmail.com" style={{ color: "#34d399", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "4px" }}>
                  smit44787@gmail.com
                </a>
              </div>
            </div>

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
        <div className="page-width footer-container">
          <div className="footer-main-grid">
            {/* Left Column: Brand & Tagline + Contact Pills */}
            <div className="footer-left-col">
              <div className="footer-brand-lockup">
                <a className="brand footer-brand" href="#home" aria-label="Alaiya Technologies home">
                  <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
                  <span className="brand-name">ALAIYA <span>TECHNOLOGIES</span></span>
                </a>
                <div className="footer-tagline-block">
                  <span>Building digital solutions</span>
                  <span>for <strong className="glow-emerald">tomorrow.</strong></span>
                </div>
              </div>

              <div className="footer-contact-pills">
                <div className="contact-pill-item">
                  <span className="contact-pill-label">Customer Support</span>
                  <a className="contact-pill-box" href="mailto:smit44787@gmail.com">
                    <Mail className="pill-icon" aria-hidden="true" />
                    <span className="pill-text">smit44787@gmail.com</span>
                    <ArrowUpRight className="pill-arrow" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Center Column: UDYAM / MSME Micro Enterprise Medallion */}
            <div className="footer-center-col">
              <div className="udyam-seal-wrapper">
                <img
                  src={udyamBadgeImage}
                  alt="UDYAM MSME Micro Enterprise"
                  className="udyam-seal-img"
                  width="180"
                  height="180"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Explore + Our Services */}
            <div className="footer-right-col">
              <div className="footer-nav-column">
                <span className="footer-column-heading">EXPLORE</span>
                <nav className="footer-nav-menu" aria-label="Explore navigation">
                  {footerExplore.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a key={item.label} href={item.href} className="footer-menu-link">
                        <Icon className="menu-icon" aria-hidden="true" />
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="footer-vertical-rule" aria-hidden="true" />

              <div className="footer-nav-column">
                <span className="footer-column-heading">OUR SERVICES</span>
                <nav className="footer-nav-menu" aria-label="Services navigation">
                  {footerServices.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a key={item.label} href={item.href} className="footer-menu-link">
                        <Icon className="menu-icon" aria-hidden="true" />
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Bottom Bar: 4 sections with vertical dividers */}
          <div className="footer-bottom-bar">
            <div className="bottom-bar-segment">
              <span>© {new Date().getFullYear()} ALAIYA TECHNOLOGIES</span>
            </div>

            <div className="bottom-bar-sep" aria-hidden="true" />

            <div className="bottom-bar-segment cert-segment">
              <span className="cert-badge-icon" aria-hidden="true"><Check className="cert-check-svg" strokeWidth={3} /></span>
              <span className="cert-text">UDYAM / MSME MICRO ENTERPRISE</span>
            </div>

            <div className="bottom-bar-sep" aria-hidden="true" />

            <div className="bottom-bar-segment purpose-segment">
              <Leaf className="purpose-leaf-icon" aria-hidden="true" />
              <span>MADE WITH PURPOSE.</span>
            </div>

            <div className="bottom-bar-sep" aria-hidden="true" />

            <div className="bottom-bar-segment backtop-segment">
              <a href="#home" className="back-to-top-btn">
                <span>BACK TO TOP</span>
                <span className="arrow-sym">↑</span>
              </a>
            </div>
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
