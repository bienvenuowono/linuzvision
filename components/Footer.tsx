import Image from "next/image";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "TASHA", href: "/tasha" },
  { label: "AI SOLUTIONS", href: "/solutions" },
  { label: "DATACENTER", href: "/datacenter" },
  { label: "CLOUD", href: "/cloud" },
  { label: "CYBERSECURITY", href: "/cybersecurity" },
  { label: "SERVICES", href: "/services" },
  { label: "TRAINING", href: "/training" },
  { label: "INSIGHTS", href: "/insights" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <a href="/" aria-label="LinuZvision home">
          <Image
            src="/images/linuzvision-logo-color.png"
            alt="LinuZvision LLC"
            width={280}
            height={88}
          />
        </a>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        {navLinks.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="footer-credits">
        <p>
          © 2026 LINUZVISION, POWERED BY{" "}
          <a
            href="https://www.linkedin.com/in/joseph-bienvenu-owono-abega-a1a2212a1"
            target="_blank"
            rel="noopener noreferrer"
          >
            BVO
          </a>
        </p>
        <a className="footer-email" href="mailto:support@linuzvision.com">
          support@linuzvision.com
        </a>
      </div>

      <div className="footer-socials" aria-label="Réseaux sociaux LinuZvision">
        <a
          href="https://linkedin.com/linuzvision"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          aria-label="LinkedIn LinuZvision"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </a>
        <a
          href="https://facebook.com/linuzvision"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          aria-label="Facebook LinuZvision"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

