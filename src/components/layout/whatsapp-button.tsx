"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { siteConfig, WHATSAPP_GREETING } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

/**
 * Floating WhatsApp button, bottom-right, opens a chat with The Mahir Tech
 * pre-filled. Shows a one-time inviting tooltip after a short delay.
 */
export function WhatsAppButton() {
  const [showTip, setShowTip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 3500);
    const h = setTimeout(() => setShowTip(false), 11000);
    return () => {
      clearTimeout(t);
      clearTimeout(h);
    };
  }, []);

  const href = whatsappLink(siteConfig.contact.whatsapp, WHATSAPP_GREETING);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {showTip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-[15rem] rounded-2xl border border-white/10 bg-ink-850 px-4 py-3 pr-8 shadow-elevated"
          >
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="absolute right-2 top-2 text-bone-400 hover:text-bone-100"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="text-sm font-medium text-bone-50">Need a quick answer?</p>
            <p className="mt-0.5 text-xs text-bone-300">
              Chat with us on WhatsApp, we usually reply fast.
            </p>
            <span className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-white/10 bg-ink-850" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with The Mahir Tech on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 [animation-duration:2.5s]" />
        <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white" aria-hidden="true">
          <path d="M16.04 3C9.43 3 4.06 8.37 4.06 14.98c0 2.1.55 4.16 1.6 5.98L4 29l8.25-1.62a11.9 11.9 0 0 0 3.78.62h.01c6.61 0 11.98-5.37 11.98-11.98C28.02 8.37 22.65 3 16.04 3Zm0 21.93h-.01c-1.13 0-2.24-.3-3.21-.88l-.23-.14-4.9.96.98-4.78-.15-.24a9.94 9.94 0 0 1-1.52-5.27c0-5.5 4.48-9.97 9.99-9.97 2.67 0 5.17 1.04 7.06 2.93a9.9 9.9 0 0 1 2.92 7.05c0 5.5-4.48 9.96-9.93 9.96Zm5.46-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </motion.a>
    </div>
  );
}
