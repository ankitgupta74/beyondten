import { Mail, MessageCircle, Phone } from "lucide-react";

export const WHATSAPP_URL =
  "https://wa.me/917980669925?text=Hi%20beyondten%2C%20I'd%20like%20to%20discuss%20a%20project.";

export const EMAIL_URL =
  "mailto:team@beyondten.in?subject=Project%20Inquiry&body=Hi%20beyondten%2C%0D%0A%0D%0AI'd%20like%20to%20scope%20a%20project.%20Here's%20a%20quick%20summary%3A%0D%0A%0D%0A[Describe%20your%20idea]%0D%0A%0D%0AThanks.";

export const CHANNELS = [
  {
    code: "CH-01",
    label: "Direct Email",
    value: "team@beyondten.in",
    href: EMAIL_URL,
    icon: Mail,
  },
  {
    code: "CH-02",
    label: "WhatsApp",
    value: "+91 79806 69925",
    href: WHATSAPP_URL,
    icon: MessageCircle,
  },
  {
    code: "CH-03",
    label: "Voice",
    value: "+91 79806 69925",
    href: "tel:+917980669925",
    icon: Phone,
  },
];

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://ig.me/m/beyondten.in",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/beyondten",
  },
];
