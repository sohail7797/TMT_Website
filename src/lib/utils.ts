import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build a WhatsApp click-to-chat link with an optional prefilled message. */
export function whatsappLink(phoneE164Digits: string, message?: string) {
  const base = `https://wa.me/${phoneE164Digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
