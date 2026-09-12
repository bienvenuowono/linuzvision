import type { FC, SVGProps } from "react";

const LogoAnthropic: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 135 22" height="18" fill="currentColor" aria-label="Anthropic" {...props}>
    <path d="M12.8 2.5h3.6l6.8 17h-3.6l-1.5-4h-6.6l-1.5 4H6.4l6.4-17zm3.8 10.3l-2.1-5.7-2.1 5.7h4.2zM2.5 2.5h3.6v17H2.5v-17z" />
    <text x="29" y="16.5" fontFamily="var(--font-inter, Inter, sans-serif)" fontWeight="700" fontSize="13" letterSpacing="0.16em">ANTHROPIC</text>
  </svg>
);

const LogoOpenAI: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 108 22" height="18" fill="currentColor" aria-label="OpenAI" {...props}>
    <path d="M13.4 3.7a4.2 4.2 0 0 0-3.8-2.1 4.3 4.3 0 0 0-4.1 3 4.3 4.3 0 0 0-2.9 2 4.3 4.3 0 0 0 .5 5 4.2 4.2 0 0 0 .4 4.4 4.3 4.3 0 0 0 4.5 2 4.3 4.3 0 0 0 3.4 1.7 4.3 4.3 0 0 0 4.1-3 4.3 4.3 0 0 0 2.9-2 4.3 4.3 0 0 0-.5-5 4.2 4.2 0 0 0-.4-4.4 4.3 4.3 0 0 0-4.1-1.6zm-6.2 13.9a3.2 3.2 0 0 1-2.1-.6l3.4-2a.6.6 0 0 0 .3-.5v-4.9l1.5.8v4.4a3.2 3.2 0 0 1-3.1 2.8zm-6-2.7a3.2 3.2 0 0 1-.4-2.1l3.4 2a.6.6 0 0 0 .6 0l4.2-2.4v1.7l-3.8 2.2a3.2 3.2 0 0 1-4-1.4zm-1.3-6.5a3.2 3.2 0 0 1 1.7-1.5v4.1a.6.6 0 0 0 .3.5l4.2 2.4-1.5.9-3.8-2.2a3.2 3.2 0 0 1-.9-4.2zm10.1 2l-4.2-2.4 1.5-.9 3.8 2.2a3.2 3.2 0 0 1 .9 4.2 3.2 3.2 0 0 1-1.7 1.5v-4.1a.6.6 0 0 0-.3-.5zm2.1-2.1l-3.4-2a.6.6 0 0 0-.6 0l-4.2 2.4V7.1l3.8-2.2a3.2 3.2 0 0 1 4 1.4 3.2 3.2 0 0 1 .4 2.1zm-6.9 1.6l1.7-1 1.7 1v2l-1.7 1-1.7-1z" />
    <text x="24" y="16" fontFamily="var(--font-inter, Inter, sans-serif)" fontWeight="600" fontSize="14" letterSpacing="-0.02em">OpenAI</text>
  </svg>
);

const LogoGoogle: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 76 22" height="18" fill="currentColor" aria-label="Google" {...props}>
    <path d="M8.8 10v2.6h6.1c-.2 1.4-1.6 4.1-6.1 4.1-3.7 0-6.7-3-6.7-6.8s3-6.8 6.7-6.8c2.1 0 3.5.9 4.3 1.7l2.1-2C13.8 1.5 11.5.4 8.8.4 3.6.4-.6 4.6-.6 9.9s4.2 9.5 9.4 9.5c5.4 0 9-3.8 9-9.2 0-.6-.1-1.1-.1-1.2H8.8zM23.4 7.8c-3.2 0-5.5 2.5-5.5 5.6 0 3.1 2.3 5.6 5.5 5.6 3.2 0 5.5-2.5 5.5-5.6 0-3.1-2.3-5.6-5.5-5.6zm0 8.9c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.7 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zm12.4-8.9c-3.2 0-5.5 2.5-5.5 5.6 0 3.1 2.3 5.6 5.5 5.6 3.2 0 5.5-2.5 5.5-5.6 0-3.1-2.3-5.6-5.5-5.6zm0 8.9c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.7 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zm11.2-8.6v.9h-.1c-.6-.7-1.7-1.3-3.1-1.3-3 0-5.5 2.6-5.5 5.6 0 3 2.5 5.6 5.5 5.6 1.4 0 2.5-.6 3.1-1.4h.1v.9c0 2.1-1.1 3.3-3 3.3-1.5 0-2.5-1.1-2.8-2l-2 .8c.6 1.4 2.1 3.1 4.8 3.1 2.8 0 5.2-1.6 5.2-5.8V8.1h-2.2zm-3 8.6c-1.7 0-3.2-1.5-3.2-3.3 0-1.8 1.4-3.3 3.2-3.3 1.7 0 3.1 1.5 3.1 3.3 0 1.8-1.4 3.3-3.1 3.3zM53.3 1.6h2.3v17.1h-2.3V1.6zm11.4 15.1c-1.2 0-2.1-.6-2.7-1.7l7.4-3.1-.2-.6c-.5-1.2-1.9-3.5-4.8-3.5-2.9 0-5.2 2.3-5.2 5.6 0 3.1 2.4 5.6 5.6 5.6 2.6 0 4.1-1.6 4.7-2.5l-1.9-1.3c-.6.9-1.5 1.5-2.9 1.5zm-.2-6.9c1 0 1.8.5 2.1 1.2l-5 2.1c0-2.4 1.7-3.3 2.9-3.3z"/>
  </svg>
);

const LogoIBM: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 68 22" height="16" fill="currentColor" aria-label="IBM" {...props}>
    {/* I */}
    <rect x="0" y="1.5" width="16" height="1.6" />
    <rect x="0" y="4.2" width="16" height="1.6" />
    <rect x="0" y="6.9" width="16" height="1.6" />
    <rect x="5.5" y="9.6" width="5" height="1.6" />
    <rect x="5.5" y="12.3" width="5" height="1.6" />
    <rect x="0" y="15" width="16" height="1.6" />
    <rect x="0" y="17.7" width="16" height="1.6" />
    <rect x="0" y="20.4" width="16" height="1.6" />
    {/* B */}
    <path d="M21 1.5h15v1.6H21zm0 2.7h16.2v1.6H21zm0 2.7h17v1.6H21zm0 2.7h5.5v1.6H21zm9.5 0h5v1.6h-5zm-9.5 2.7h5.5v1.6H21zm9.5 0h5v1.6h-5zm-9.5 2.7h17v1.6H21zm0 2.7h16.2v1.6H21zm0 2.7h15v1.6H21z" />
    {/* M */}
    <path d="M43 1.5h4.5l4.5 4 4.5-4H61v1.6h-3.8l-5.2 4.7-5.2-4.7H43zm0 2.7h3.8l5.2 4.7 5.2-4.7H61v1.6h-3l-6 5.4-6-5.4H43zm0 2.7h3.2l5.8 5.2 5.8-5.2H61v1.6h-2.5l-6.5 5.8-6.5-5.8H43zm0 2.7h4.8v1.6H43zm13.2 0H61v1.6h-4.8zm-13.2 2.7h4.8v1.6H43zm13.2 0H61v1.6h-4.8zm-13.2 2.7h4.8v1.6H43zm13.2 0H61v1.6h-4.8zm-13.2 2.7h4.8v1.6H43zm13.2 0H61v1.6h-4.8zm-13.2 2.7h4.8v1.6H43zm13.2 0H61v1.6h-4.8z" />
  </svg>
);

const LogoMicrosoft: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 115 22" height="18" fill="currentColor" aria-label="Microsoft" {...props}>
    <rect x="0" y="2.5" width="7.5" height="7.5" />
    <rect x="9.5" y="2.5" width="7.5" height="7.5" />
    <rect x="0" y="12" width="7.5" height="7.5" />
    <rect x="9.5" y="12" width="7.5" height="7.5" />
    <text x="24" y="16.5" fontFamily="var(--font-inter, Inter, sans-serif)" fontWeight="600" fontSize="14" letterSpacing="-0.02em">Microsoft</text>
  </svg>
);

const LogoNvidia: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 102 22" height="18" fill="currentColor" aria-label="NVIDIA" {...props}>
    <path d="M11.8 2.5c-4.6 0-8.4 3.2-9.3 7.5 1-.8 2.4-1.4 3.8-1.4 3.2 0 5.7 2.6 5.7 5.7 0 1-.3 1.8-.7 2.6 3-.8 5.3-3.5 5.3-6.9 0-4.2-3.4-7.5-4.8-7.5zm-8.8 8.3c-.2.6-.3 1.2-.3 1.9 0 4.8 3.8 8.6 8.6 8.6 3.4 0 6.5-2 7.8-5-1.1 1.3-3 2.2-5 2.2-3.7 0-6.7-3-6.7-6.7 0-.3 0-.6.1-.9H3z" />
    <text x="24" y="16" fontFamily="var(--font-inter, Inter, sans-serif)" fontWeight="800" fontSize="13" letterSpacing="0.06em">NVIDIA</text>
  </svg>
);

const LogoAmazon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 88 22" height="18" fill="currentColor" aria-label="Amazon" {...props}>
    <text x="0" y="14.5" fontFamily="var(--font-inter, Inter, sans-serif)" fontWeight="700" fontSize="15" letterSpacing="-0.03em">amazon</text>
    <path d="M2 18.5c10.5 4.5 26 3.5 40-3-.5-.4-1.1-.9-1.5-1.2 0 0-9.8 4.8-21.5 3.9-5-.4-9.8-1.8-14.3-4l-2.7 4.3z" />
    <path d="M43.5 13.5c-.7 1.4-1.3 3-1 3.9.8-.3 2.3-.6 3.6-.3-.5-.8-1.6-2.3-2.6-3.6z" />
  </svg>
);

const LogoGroq: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 62 22" height="18" fill="currentColor" aria-label="Groq" {...props}>
    <text x="0" y="16.5" fontFamily="var(--font-inter, Inter, sans-serif)" fontWeight="800" fontSize="17" letterSpacing="-0.04em">groq</text>
  </svg>
);

const LogoMetaAI: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 96 22" height="18" fill="currentColor" aria-label="Meta AI" {...props}>
    <path d="M12.2 5.5c-1.7 0-3.1 1-3.9 2.2-.8-1.2-2.2-2.2-3.9-2.2C1.9 5.5 0 7.5 0 10.1s1.9 4.6 4.4 4.6c1.7 0 3.1-1 3.9-2.2.8 1.2 2.2 2.2 3.9 2.2 2.5 0 4.4-2 4.4-4.6s-1.9-4.6-4.4-4.6zm-7.8 7.2c-1.4 0-2.5-1.2-2.5-2.6s1.1-2.6 2.5-2.6c1.3 0 2.4 1.1 2.6 2.4-.4 1.5-1.4 2.8-2.6 2.8zm7.8 0c-1.2 0-2.2-1.3-2.6-2.8.2-1.3 1.3-2.4 2.6-2.4 1.4 0 2.5 1.2 2.5 2.6s-1.1 2.6-2.5 2.6z" />
    <text x="21" y="16" fontFamily="var(--font-inter, Inter, sans-serif)" fontWeight="700" fontSize="13" letterSpacing="-0.01em">Meta AI</text>
  </svg>
);

const LogoVertiv: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 88 22" height="18" fill="currentColor" aria-label="Vertiv" {...props}>
    <path d="M0 3.5h4.2l3.8 11.2L11.8 3.5H16l-5.8 15.2H6L0 3.5z" />
    <text x="20" y="16.5" fontFamily="var(--font-inter, Inter, sans-serif)" fontWeight="800" fontSize="14" letterSpacing="0.08em">VERTIV</text>
  </svg>
);

const LogoEquinix: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 98 22" height="18" fill="currentColor" aria-label="Equinix" {...props}>
    <path d="M0 4h3.6v14.4H0V4zm5.4 0H9v14.4H5.4V4zm5.4 0h3.6v14.4h-3.6V4zm-8.1 0h9v2.8h-9V4zm0 11.6h9v2.8h-9v-2.8z" />
    <text x="18" y="16.5" fontFamily="var(--font-inter, Inter, sans-serif)" fontWeight="700" fontSize="13" letterSpacing="0.1em">EQUINIX</text>
  </svg>
);

const LogoDigitalRealty: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 148 22" height="18" fill="currentColor" aria-label="Digital Realty" {...props}>
    <path d="M2 9l5.5-3.2 5.5 3.2v6.4L7.5 18.6 2 15.4V9zm5.5-1.4L4.3 9.4l3.2 1.8 3.2-1.8-3.2-1.8zm-3.7 3.2v4.1l3.2 1.9v-4.1L3.8 10.8zm8.2 4.1v-4.1l-3.2-1.9v4.1l3.2 1.9z" />
    <text x="18" y="16" fontFamily="var(--font-inter, Inter, sans-serif)" fontWeight="700" fontSize="12" letterSpacing="0.06em">DIGITAL REALTY</text>
  </svg>
);

const LogoDell: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 65 22" height="18" fill="currentColor" aria-label="Dell" {...props}>
    <path d="M0 3.5h6.5c3.8 0 6.2 2.3 6.2 6s-2.4 6-6.2 6H0V3.5zm3.3 2.9v6.2h2.8c2 0 3.2-1.1 3.2-3.1s-1.2-3.1-3.2-3.1h-2.8z" />
    <path d="M14.2 3.5h8.5v2.8H17.5v2.5h4.2v2.5h-4.2v3.2h5.5v2.8h-8.8V3.5z" transform="rotate(-15 18.5 9.5)" />
    <path d="M26 3.5h3.3v9.2h5.5v2.8H26V3.5zm10.5 0h3.3v9.2h5.5v2.8h-8.8V3.5z" />
  </svg>
);

const LogoCisco: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 84 22" height="20" fill="currentColor" aria-label="Cisco" {...props}>
    <rect x="0" y="6" width="1.8" height="4" rx="0.9" />
    <rect x="3.8" y="4.2" width="1.8" height="5.8" rx="0.9" />
    <rect x="7.6" y="1.5" width="1.8" height="8.5" rx="0.9" />
    <rect x="11.4" y="4.2" width="1.8" height="5.8" rx="0.9" />
    <rect x="15.2" y="2.5" width="1.8" height="7.5" rx="0.9" />
    <rect x="19" y="4.2" width="1.8" height="5.8" rx="0.9" />
    <rect x="22.8" y="1.5" width="1.8" height="8.5" rx="0.9" />
    <rect x="26.6" y="4.2" width="1.8" height="5.8" rx="0.9" />
    <rect x="30.4" y="6" width="1.8" height="4" rx="0.9" />
    <text x="36" y="17.5" fontFamily="var(--font-inter, Inter, sans-serif)" fontWeight="700" fontSize="14" letterSpacing="0.1em">CISCO</text>
  </svg>
);

const logos = [
  { name: "Anthropic", Component: LogoAnthropic },
  { name: "OpenAI", Component: LogoOpenAI },
  { name: "Google", Component: LogoGoogle },
  { name: "IBM", Component: LogoIBM },
  { name: "Microsoft", Component: LogoMicrosoft },
  { name: "NVIDIA", Component: LogoNvidia },
  { name: "Amazon", Component: LogoAmazon },
  { name: "Groq", Component: LogoGroq },
  { name: "Meta AI", Component: LogoMetaAI },
  { name: "Vertiv", Component: LogoVertiv },
  { name: "Equinix", Component: LogoEquinix },
  { name: "Digital Realty", Component: LogoDigitalRealty },
  { name: "Dell", Component: LogoDell },
  { name: "Cisco", Component: LogoCisco },
];

export function TechLogoSlider() {
  return (
    <div className="logo-ticker-strip" aria-label="Technology & Infrastructure Ecosystem">
      <div className="logo-ticker-track">
        {/* Set 1 */}
        {logos.map(({ name, Component }, idx) => (
          <div className="logo-ticker-item" key={`logo-1-${name}-${idx}`} title={name}>
            <Component />
          </div>
        ))}
        {/* Set 2 duplicate for seamless continuous loop */}
        {logos.map(({ name, Component }, idx) => (
          <div className="logo-ticker-item" key={`logo-2-${name}-${idx}`} aria-hidden="true" title={name}>
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
}
