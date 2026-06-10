import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (p: IconProps): IconProps => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  ...p,
});

export const DocIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="13" y2="16" />
  </svg>
);

export const LinkIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="8" cy="8" r="3.4" />
    <circle cx="16" cy="16" r="3.4" />
    <line x1="10.4" y1="10.4" x2="13.6" y2="13.6" />
  </svg>
);

export const FlowIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="6" cy="6" r="2.4" />
    <circle cx="18" cy="18" r="2.4" />
    <path d="M6 8.4V14a4 4 0 0 0 4 4h5.6" />
  </svg>
);

export const InvoiceIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 3h12v18l-3-2-3 2-3-2-3 2Z" />
    <line x1="9" y1="9" x2="15" y2="9" />
    <line x1="9" y1="13" x2="13" y2="13" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const ArchiveIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="4" width="16" height="5" rx="1" />
    <path d="M5 9v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" />
    <line x1="10" y1="13" x2="14" y2="13" />
  </svg>
);

export const CheckCircleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </svg>
);

export const ChipIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9.5" y="9.5" width="5" height="5" />
    <line x1="3" y1="9" x2="6" y2="9" />
    <line x1="3" y1="15" x2="6" y2="15" />
    <line x1="18" y1="9" x2="21" y2="9" />
    <line x1="18" y1="15" x2="21" y2="15" />
  </svg>
);

export const ScaleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <line x1="12" y1="4" x2="12" y2="20" />
    <line x1="7" y1="20" x2="17" y2="20" />
    <path d="M12 6 6 9l-2 4a3 3 0 0 0 6 0Z" />
    <path d="M12 6l6 3 2 4a3 3 0 0 1-6 0Z" />
  </svg>
);

export const BuildingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="3" width="14" height="18" rx="1.5" />
    <line x1="9" y1="7" x2="9" y2="7.01" />
    <line x1="12" y1="7" x2="12" y2="7.01" />
    <line x1="15" y1="7" x2="15" y2="7.01" />
    <line x1="9" y1="11" x2="9" y2="11.01" />
    <line x1="12" y1="11" x2="12" y2="11.01" />
    <line x1="15" y1="11" x2="15" y2="11.01" />
    <line x1="10" y1="21" x2="14" y2="21" />
  </svg>
);

export const SparkIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8l1.4 2.6L16 12l-2.6 1.4L12 16l-1.4-2.6L8 12l2.6-1.4Z" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base({ strokeWidth: 2, ...p })}>
    <path d="M5 12l4 4L19 7" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.3 0 .5l-.4.5c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.7-.1 1.3Z" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...p })}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const BarsIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <line x1="5" y1="20" x2="5" y2="13" />
    <line x1="10" y1="20" x2="10" y2="8" />
    <line x1="15" y1="20" x2="15" y2="11" />
    <line x1="20" y1="20" x2="20" y2="5" />
  </svg>
);

export const CoinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <path d="M12 9v6M10.5 10.5h2.2a1 1 0 0 1 0 2H11a1 1 0 0 0 0 2h2.5" />
  </svg>
);

export const GlobeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <ellipse cx="12" cy="12" rx="4" ry="9" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

export const SafeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="9" x2="12" y2="10.5" />
    <line x1="17" y1="20" x2="17" y2="22" />
    <line x1="7" y1="20" x2="7" y2="22" />
  </svg>
);

export const PlusIcon = (p: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...p })}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export type IconName =
  | "doc"
  | "link"
  | "flow"
  | "invoice"
  | "shield"
  | "archive"
  | "check2"
  | "chip"
  | "scale"
  | "building"
  | "spark"
  | "bars"
  | "coin"
  | "globe"
  | "safe";

export const ICONS: Record<IconName, (p: IconProps) => React.JSX.Element> = {
  doc: DocIcon,
  link: LinkIcon,
  flow: FlowIcon,
  invoice: InvoiceIcon,
  shield: ShieldIcon,
  archive: ArchiveIcon,
  check2: CheckCircleIcon,
  chip: ChipIcon,
  scale: ScaleIcon,
  building: BuildingIcon,
  spark: SparkIcon,
  bars: BarsIcon,
  coin: CoinIcon,
  globe: GlobeIcon,
  safe: SafeIcon,
};
