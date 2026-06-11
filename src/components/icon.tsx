import * as Lucide from "lucide-react";
import type { LucideProps } from "lucide-react";

/**
 * Resolve a lucide icon by its component name (as stored in content data).
 * Falls back to a neutral dot if the name is unknown.
 */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = (Lucide as unknown as Record<string, React.ComponentType<LucideProps>>)[name];
  const Fallback = Lucide.Circle;
  const Resolved = Cmp ?? Fallback;
  return <Resolved {...props} />;
}
