import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/cardapio", "/sobre", "/premio", "/contato", "/privacidade"].map((p) => ({ url: `${SITE_URL}${p}`, lastModified: new Date("2026-11-06") }));
}
