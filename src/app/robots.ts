import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://june-rhomel-portfolio-a0305.web.app/sitemap.xml",
  };
}
