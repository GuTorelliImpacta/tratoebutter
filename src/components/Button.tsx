import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "ghost-dark";
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex min-h-[48px] items-center justify-center gap-2 px-6 py-3 font-slab text-base font-bold uppercase tracking-wide transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-butter";
const variants = {
  primary: "bg-butter text-ink hover:bg-[#e69b52]",
  ghost: "border-2 border-paper text-paper hover:bg-paper hover:text-ink",
  "ghost-dark": "border-2 border-ink text-ink hover:bg-ink hover:text-paper",
};

export function Button({ href, children, variant = "primary", external, className = "" }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    const isWeb = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
