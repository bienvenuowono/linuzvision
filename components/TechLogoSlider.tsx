const logos = [
  { name: "Anthropic", file: "anthropic.svg" },
  { name: "OpenAI", file: "openai.svg" },
  { name: "Google", file: "google.svg" },
  { name: "IBM", file: "ibm.svg" },
  { name: "Microsoft", file: "microsoft.svg" },
  { name: "NVIDIA", file: "nvidia.svg" },
  { name: "Amazon", file: "amazon.svg" },
  { name: "Groq", file: "groq.svg" },
  { name: "Meta AI", file: "meta.svg" },
  { name: "Vertiv", file: "vertiv.svg" },
  { name: "Equinix", file: "equinix.svg" },
  { name: "Digital Realty", file: "digital-realty.png" },
  { name: "Dell", file: "dell.png" },
  { name: "Cisco", file: "cisco.svg" },
];

export function TechLogoSlider() {
  return (
    <div className="logo-ticker-strip" aria-label="Technology & Infrastructure Ecosystem">
      <div className="logo-ticker-track">
        {[0, 1].map((copy) => logos.map(({ name, file }) => (
          <div className="logo-ticker-item" key={`${copy}-${name}`} aria-hidden={copy === 1 ? true : undefined} title={name}>
            <img src={`/images/technology-logos/${file}`} alt={copy === 0 ? name : ""} width={160} height={28} />
          </div>
        )))}
      </div>
    </div>
  );
}
