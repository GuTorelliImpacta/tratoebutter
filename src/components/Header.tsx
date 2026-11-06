"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { business, nav } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const link = "inline-flex min-h-[44px] items-center font-slab font-bold uppercase tracking-wide hover:text-butter focus-visible:outline focus-visible:outline-2 focus-visible:outline-butter";

  return (
    <header className="sticky top-0 z-40 border-b border-paper/20 bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <Link href="/" aria-label="Trato & Butter — página inicial" className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-butter">
          <Image src="/img/logo.png" alt="Trato & Butter" width={56} height={56} priority className="h-14 w-14" />
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={link}>{n.label}</Link>
          ))}
          <a
            href={business.ifood}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center bg-butter px-4 font-slab font-bold uppercase tracking-wide text-ink hover:bg-[#e69b52] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
          >
            Pedir
          </a>
        </nav>
        <button
          ref={btn}
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border-2 border-paper px-3 font-slab font-bold uppercase md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Principal (celular)" className="border-t border-paper/20 px-4 pb-4 md:hidden">
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={`${link} w-full py-1 text-xl`} onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={business.ifood} target="_blank" rel="noopener noreferrer" className={`${link} w-full py-1 text-xl text-butter`}>
                Pedir no iFood
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
