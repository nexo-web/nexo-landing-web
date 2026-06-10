import { CONTACT } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={CONTACT.wa1link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
