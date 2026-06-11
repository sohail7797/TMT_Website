import type { ReactNode } from "react";

/** Consistent typographic wrapper for legal / long-form text pages. */
export function LegalProse({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        mx-auto max-w-3xl
        [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-bone-50
        [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-bone-100
        [&_p]:mb-4 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-bone-300
        [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:pl-5
        [&_li]:list-disc [&_li]:text-sm [&_li]:leading-relaxed [&_li]:text-bone-300 [&_li]:marker:text-gold-400
        [&_a]:text-gold-300 [&_a]:underline-offset-4 hover:[&_a]:underline
        [&_strong]:text-bone-100
      "
    >
      {children}
    </div>
  );
}
