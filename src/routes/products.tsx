import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Box,
  Camera,
  Check,
  FileText,
  Headphones,
  Home,
  Info,
  Landmark,
  Layers,
  LayoutGrid,
  Leaf,
  Mail,
  Menu,
  MessageCircle,
  MessageSquareCode,
  Monitor,
  Scissors,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import udyamBadgeImage from "@/assets/udyam-badge-2x.png";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product Suite — Alaiya Technologies" },
      {
        name: "description",
        content:
          "Specialized software products built for your industry by Alaiya Technologies. Discover AlaiyaHub, Alaiya Photographer, Book4Me Salon, Alaiya Auth, Alaiya CA-Firm, and WhatsApp CRM.",
      },
      { property: "og:title", content: "Product Suite — Alaiya Technologies" },
      {
        property: "og:description",
        content:
          "Pre-built, customizable digital platforms engineered by Alaiya Technologies to solve everyday operations, client communication, and growth.",
      },
    ],
  }),
  component: ProductsPage,
});

const navigation = [
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/products" },
  { label: "Our work", href: "/#work" },
  { label: "Reviews", href: "/#reviews" },
  { label: "About", href: "/#about" },
  { label: "FAQs", href: "/#faq" },
];

const productCategories = [
  "All Products",
  "Operations & CRM",
  "Industry Suites",
  "Security",
] as const;
type ProductCategory = (typeof productCategories)[number];

interface ProductItem {
  id: string;
  name: string;
  category: "Operations & CRM" | "Industry Suites" | "Security";
  badge: string;
  icon: typeof LayoutGrid;
  subtitle: string;
  description: string;
  checklist: string[];
  buttonText: string;
  isPrimary?: boolean;
}

const productsData: ProductItem[] = [
  {
    id: "alaiyahub",
    name: "AlaiyaHub",
    category: "Operations & CRM",
    badge: "OPERATIONS & CRM",
    icon: LayoutGrid,
    subtitle: "Central business operations & CRM platform",
    description:
      "All-in-one CRM solutions designed for different types of businesses. Brings customer records, lead pipelines, staff schedules, and revenue metrics together in one unified hub.",
    checklist: [
      "Unified CRM for multi-industry businesses",
      "360° customer records & booking history",
      "Revenue analytics & operational KPIs",
      "Staff shift, commissions & multi-branch sync",
    ],
    buttonText: "Explore AlaiyaHub",
    isPrimary: true,
  },
  {
    id: "alaiya-photographer",
    name: "Alaiya Photographer",
    category: "Industry Suites",
    badge: "CREATIVE & STUDIO",
    icon: Camera,
    subtitle: "Client proofing galleries & shoot management",
    description:
      "Smart photo delivery platform where clients and event guests access their personalized photos instantly via a QR code scanner, alongside full proofing galleries and contracts.",
    checklist: [
      "QR code instant scanner to access client photos",
      "Fast proofing & client-favorite galleries",
      "Digital contracts & e-signatures",
      "Booking calendar with blocked workflows",
    ],
    buttonText: "Explore Photographer",
  },
  {
    id: "alaiya-hospitality-salon",
    name: "Alaiya Hospitality / Salon",
    category: "Industry Suites",
    badge: "APPOINTMENT & SALON",
    icon: Scissors,
    subtitle: "Real-time booking, stylist rosters & salon CRM",
    description:
      "Powered by Book4Me — the dedicated salon, spa, and hospitality platform for real-time chair/room bookings, stylist schedules, service records, and point-of-sale billing.",
    checklist: [
      "Book4Me smart slot & chair scheduling",
      "Salon & hospitality real-time booking engine",
      "Client treatment notes, formula records & visit logs",
      "Package billing, POS & WhatsApp appointment reminders",
    ],
    buttonText: "Explore Hospitality",
  },
  {
    id: "alaiya-auth",
    name: "Alaiya Auth",
    category: "Security",
    badge: "IDENTITY & SECURITY",
    icon: Shield,
    subtitle: "Developer-first identity & session security",
    description:
      "Modern web application security suite that stores client-side encryption and TOTP authenticators securely in local storage, complete with passwordless magic links and RBAC.",
    checklist: [
      "Encrypted local storage vault for TOTP authenticator",
      "Client-side encryption for secure web apps",
      "Passwordless magic links & biometric Passkeys",
      "Role-based access control (RBAC) & fast session verify",
    ],
    buttonText: "Explore Auth",
  },
  {
    id: "alaiya-ca-firm",
    name: "Alaiya CA-Firm",
    category: "Industry Suites",
    badge: "PRACTICE & COMPLIANCE",
    icon: Landmark,
    subtitle: "Client document vault & statutory tracker",
    description:
      "Tailored practice management portal for Chartered Accountants and tax consultants to manage GST filings, income tax returns, client document vaults, and compliance calendars.",
    checklist: [
      "CA practice portal for GST & tax return filings",
      "Statutory compliance calendar & deadline monitor",
      "End-to-end encrypted document vault & tally sync",
      "Automated client retainer billing & fee reminders",
    ],
    buttonText: "Explore CA-Firm",
  },
  {
    id: "alaiya-whatsapp-crm",
    name: "Alaiya WhatsApp CRM",
    category: "Operations & CRM",
    badge: "CONVERSATIONAL CRM",
    icon: MessageCircle,
    subtitle: "Official WhatsApp Cloud API & team inbox",
    description:
      "Direct WhatsApp Business automation powered by the official Meta WhatsApp Cloud API with multi-agent shared inboxes, automated customer replies, broadcast campaigns, and CRM sync.",
    checklist: [
      "Official Meta WhatsApp Business Cloud API integration",
      "Multi-agent shared team inbox & conversation routing",
      "Automated lead capture & custom no-code reply bots",
      "Broadcast campaigns & instant CRM profile sync",
    ],
    buttonText: "Explore WhatsApp CRM",
  },
];

const footerExplore = [
  { label: "Services", href: "/#services", icon: Home },
  { label: "Products", href: "/products", icon: Box },
  { label: "Our Work", href: "/#work", icon: Layers },
  { label: "Reviews", href: "/#reviews", icon: Users },
  { label: "About", href: "/#about", icon: Info },
  { label: "FAQs", href: "/#faq", icon: FileText },
  { label: "Help & Support", href: "mailto:smit44787@gmail.com", icon: Headphones },
];

const footerServices = [
  { label: "AlaiyaHub & Custom CRM", href: "/products", icon: LayoutGrid },
  { label: "Industry Portals (Salon, CA, Photo)", href: "/products", icon: Sparkles },
  { label: "Alaiya Auth & Security", href: "/products", icon: ShieldCheck },
  { label: "WhatsApp CRM & Automation", href: "/products", icon: MessageSquareCode },
];

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("All Products");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts = productsData.filter((item) => {
    if (activeCategory === "All Products") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="products-page-container">
      {/* EXACT STANDARD SITE-HEADER */}
      <header className="site-header">
        <div className="nav-shell">
          <Link to="/" className="brand" aria-label="Alaiya Technologies home">
            <span className="brand-symbol" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-name">
              ALAIYA <span>TECHNOLOGIES</span>
            </span>
          </Link>

          <nav className={`main-navigation${mobileMenuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={item.href === "/products" ? "is-current-page" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="nav-mobile-cta" size="sm">
              <a href="/#contact">Let’s talk <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          </nav>

          <Button asChild className="nav-cta" size="sm">
            <a href="/#contact">Let’s talk <ArrowUpRight aria-hidden="true" /></a>
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

      <main>
        {/* Hero Section matching reference image style */}
        <section className="suite-hero-section">
          <div className="page-width suite-hero-grid">
            <div className="suite-hero-copy">
              <p className="suite-eyebrow">— ALAIYA PRODUCT SUITE</p>
              <h1 className="suite-hero-title">
                Specialized software products<br />
                built for <span className="suite-accent-word">your industry.</span>
              </h1>
              <p className="suite-hero-desc">
                Pre-built, customizable digital platforms engineered by Alaiya Technologies to solve everyday operations, client communication, and growth.
              </p>
            </div>

            {/* 3D Glass Tiles visual matching reference image */}
            <div className="suite-hero-visual" aria-hidden="true">
              <div className="suite-glass-stage">
                <div className="suite-glass-radial-glow" />
                <div className="suite-glass-tile suite-glass-back" />
                <div className="suite-glass-tile suite-glass-mid" />
                <div className="suite-glass-tile suite-glass-front">
                  <div className="suite-glass-logo">
                    <span className="glass-bar" />
                    <span className="glass-bar" />
                    <span className="glass-bar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page Divider & Heading WITH CATEGORY FILTER PILLS IN THE BODY */}
        <section className="suite-products-section">
          <div className="page-width">
            <div className="suite-divider-row">
              <div className="suite-divider-left">
                <h2 className="suite-divider-heading">Our Products</h2>
                <span className="suite-divider-pipe" aria-hidden="true">|</span>
                <span className="suite-divider-desc">
                  {String(filteredProducts.length).padStart(2, "0")} specialized solutions for operations, client management, and industry workflows.
                </span>
              </div>

              {/* Category Filter Pills Placed Directly in the Body Section */}
              <div className="suite-pills-list body-pills-list" role="tablist" aria-label="Filter products by category">
                {productCategories.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    className={`suite-pill-btn${activeCategory === cat ? " is-active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* 3x2 Grid of 6 Product Cards matching reference image */}
            <div className="suite-cards-grid">
              {filteredProducts.map((prod) => {
                const IconComponent = prod.icon;
                return (
                  <article
                    className={`suite-card${prod.isPrimary ? " is-featured-card" : ""}`}
                    key={prod.id}
                  >
                    <div className="suite-card-top">
                      <div className="suite-card-icon-box">
                        <IconComponent aria-hidden="true" />
                      </div>
                      <span className="suite-card-badge">{prod.badge}</span>
                    </div>

                    <h3 className="suite-card-title">{prod.name}</h3>
                    <p className="suite-card-subtitle">{prod.subtitle}</p>

                    <ul className="suite-card-checklist" aria-label={`${prod.name} capabilities`}>
                      {prod.checklist.map((point) => (
                        <li key={point}>
                          <span className="suite-check-sym" aria-hidden="true">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="suite-card-action">
                      <a
                        href="/#contact"
                        className={`suite-card-btn${prod.isPrimary ? " btn-primary" : " btn-outline"}`}
                      >
                        <span>{prod.buttonText}</span>
                        <span className="suite-btn-arrow" aria-hidden="true">→</span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom Custom Product Banner matching reference image */}
            <div className="suite-bottom-banner">
              <div className="suite-banner-icon-col">
                <div className="suite-banner-icon-box">
                  <Layers aria-hidden="true" />
                </div>
              </div>
              <div className="suite-banner-text-col">
                <h4 className="suite-banner-title">Need a custom product or a tailored workflow?</h4>
                <p className="suite-banner-desc">
                  We can customize any Alaiya product for your exact business process or build a completely bespoke platform from discovery to launch.
                </p>
              </div>
              <div className="suite-banner-btn-col">
                <a href="/#contact" className="suite-banner-white-btn">
                  <span>Discuss Your Requirement</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* EXACT STANDARD SITE-FOOTER */}
      <footer className="site-footer">
        <div className="page-width footer-container">
          <div className="footer-main-grid">
            {/* Left Column: Brand & Tagline + Contact Pills */}
            <div className="footer-left-col">
              <div className="footer-brand-lockup">
                <Link to="/" className="brand footer-brand" aria-label="Alaiya Technologies home">
                  <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
                  <span className="brand-name">ALAIYA <span>TECHNOLOGIES</span></span>
                </Link>
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
              <a href="#" className="back-to-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <span>BACK TO TOP</span>
                <span className="arrow-sym">↑</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
