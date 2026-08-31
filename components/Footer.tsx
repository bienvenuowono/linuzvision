import Image from "next/image";

const groups = [
  ["INTELLIGENCE", [["TASHA", "/tasha"], ["AI SOLUTIONS", "/solutions"], ["INSIGHTS", "/insights"]]],
  ["INFRASTRUCTURE", [["SERVICES", "/services"], ["CLOUD", "/cloud"], ["CYBERSECURITY", "/cybersecurity"], ["TRAINING", "/training"]]],
  ["COMPANY", [["ABOUT", "/about"], ["CONTACT", "/contact"]]],
] as const;

export function Footer() {
  return <footer className="footer">
    <div className="footer-brand"><a href="/" aria-label="LinuZvision home"><Image src="/images/linuzvision-logo.jpg" alt="LinuZvision LLC" width={300} height={108} /></a><p>© 2026 LINUZVISION, POWERED BY <a href="https://www.linkedin.com/in/joseph-bienvenu-owono-abega-a1a2212a1" target="_blank" rel="noopener noreferrer">BVO</a></p><a href="mailto:linuzvisionllc@gmail.com">linuzvisionllc@gmail.com</a><address>611 Possum Trot Way, Aberdeen, MD 21001</address></div>
    <nav aria-label="Footer navigation">{groups.map(([group, links]) => <section key={group}><strong>{group}</strong>{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</section>)}</nav>
  </footer>;
}
