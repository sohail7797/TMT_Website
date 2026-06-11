import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-gold-300 to-gold-500 text-ink-950 font-semibold shadow-[0_8px_30px_-8px_rgba(230,180,60,0.5)] hover:from-gold-200 hover:to-gold-400 hover:shadow-[0_10px_40px_-8px_rgba(230,180,60,0.65)] hover:-translate-y-0.5",
        secondary:
          "border border-white/15 bg-white/5 text-bone-50 backdrop-blur hover:border-gold-400/50 hover:bg-white/[0.08] hover:-translate-y-0.5",
        ghost: "text-bone-200 hover:text-gold-300 hover:bg-white/5",
        outline:
          "border border-gold-400/40 text-gold-200 hover:bg-gold-400/10 hover:border-gold-400/70",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base py-3.5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type CommonProps = VariantProps<typeof buttonVariants> & { className?: string };

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Strip the styling-only props so the rest can spread safely onto a DOM node. */
function domProps<T extends CommonProps>(props: T) {
  const { variant, size, className, ...rest } = props;
  void variant;
  void size;
  void className;
  return rest;
}

export function Button(props: ButtonProps) {
  const classes = cn(buttonVariants({ variant: props.variant, size: props.size }), props.className);

  if ("href" in props && props.href !== undefined) {
    const { href, external, ...rest } = domProps(props) as Omit<ButtonAsLink, "variant" | "size" | "className">;
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest} />
      );
    }
    return <Link href={href} className={classes} {...rest} />;
  }

  const rest = domProps(props) as Omit<ButtonAsButton, "variant" | "size" | "className">;
  return <button className={classes} {...rest} />;
}

export { buttonVariants };
