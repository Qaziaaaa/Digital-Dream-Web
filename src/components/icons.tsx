import type { SVGProps } from "react";

const paths: Record<string, React.ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </>
  ),
  smartphone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  pen: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15l.9 2.4L22 18l-2.1.6L19 21l-.9-2.4L16 18l2.1-.6L19 15zM5 2l.7 1.8L7.5 4.5l-1.8.7L5 7l-.7-1.8L2.5 4.5l1.8-.7L5 2z" />
    </>
  ),
  layers: (
    <>
      <path d="M12 2 22 7l-10 5L2 7l10-5z" />
      <path d="M2 12.5 12 17l10-4.5" />
      <path d="M2 17.5 12 22l10-4.5" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 3 3 5-6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  map: (
    <>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  code: (
    <>
      <path d="m8 9-4 4 4 4M16 9l4 4-4 4M14 5l-4 14" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.8-.8.8-2.2 0-3s-2.2-.8-3 0z" />
      <path d="M13 3c3.5-1.5 8-1 9.5 1.5S22.5 14 20 18l-6 1-6-6 1-6c.7-.4 2.7-3 4-4z" />
      <path d="M13 3 8.5 12M21 8.5 12 13" />
      <circle cx="15" cy="9" r="1.5" />
    </>
  ),
  heart: (
    <path d="M12 21s-7.5-4.7-9.8-9.2C.8 8.6 2.9 5 6.2 5c2 0 3.6 1.1 4.3 2.8h3C14.2 6.1 15.8 5 17.8 5c3.3 0 5.4 3.6 4 6.8C19.5 16.3 12 21 12 21z" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M17.5 14.5a6.5 6.5 0 0 1 4 5.5" />
    </>
  ),
  message: (
    <>
      <path d="M21 12a8 8 0 0 1-8 8H4l2.3-2.6A8 8 0 1 1 21 12z" />
      <path d="M8.5 10.5h7M8.5 13.5h4" />
    </>
  ),
  zap: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  arrowRight: <path d="M5 12h14m-6-6 6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  arrowUp: <path d="M12 19V5m-6 6 6-6 6 6" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M5 3h4l1.5 5-2.5 1.5a12 12 0 0 0 6.5 6.5l1.5-2.5 5 1.5v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  quote: <path d="M9 7c-3 1-5 4-5 8 0 2 1.5 3.5 3.5 3.5S11 17 11 15 9.5 11.5 8 11.5c.5-2 2-3.5 4-4L9 7zm11 0c-3 1-5 4-5 8 0 2 1.5 3.5 3.5 3.5S22 17 22 15s-1.5-3.5-3-3.5c.5-2 2-3.5 4-4L20 7z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  linkedin: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3" />
      <path d="M7 10.5V17M7 7.5v.01M11.5 17v-3.8c0-1.3.9-2.4 2.2-2.4s2.3 1.1 2.3 2.4V17" />
    </>
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.1-.2-4.4-1-4.4-4.6 0-1 .4-1.9 1-2.5-.1-.3-.4-1.2.1-2.4 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.2.2 2.1.1 2.4.6.7 1 1.5 1 2.5 0 3.6-2.3 4.4-4.4 4.6.4.3.8.9.8 1.9v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
  ),
  whatsapp: (
    <>
      <path d="M12 2a10 10 0 0 0-8.7 15L2 22l5.1-1.3A10 10 0 1 0 12 2z" />
      <path d="M8.5 8.5c-.5 1.2 1 3.6 3.2 5.8s4.6 3.7 5.8 3.2c1.4-.5-1.3-3.4-2-3.6-.8-.2-1.2.5-1.6 1-.3.3-.7.1-1.3-.5s-1.2-1.3-1.6-1.7l-.2-.7c-.3-.8-.6-1.2-.8-1.5-.7-.6-.7-.9-.9-1.6-.1-.7 1.2-1.4 2-2z" />
    </>
  ),
  file: (
    <>
      <path d="M6 2h8l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M14 2v5h5" />
    </>
  ),
  mailOpen: (
    <>
      <path d="m2 8 10 6 10-6-10-5L2 8z" />
      <path d="M2 8v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8M22 8l-10 6L2 8" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & { name: keyof typeof paths | string };

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width="1em"
      height="1em"
      {...props}
    >
      {paths[name] ?? paths.sparkles}
    </svg>
  );
}

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="ddw-grad" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5C9DFB" />
          <stop offset="1" stopColor="#2684FC" />
        </linearGradient>
      </defs>
      <rect x="2.5" y="2.5" width="35" height="35" rx="10" fill="url(#ddw-grad)" />
      <path
        d="M11 27V13l9 9 9-9v14"
        stroke="#fff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="20" cy="13" r="2.6" fill="#fff" />
    </svg>
  );
}