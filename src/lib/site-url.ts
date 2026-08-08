const fallbackUrl = "https://june-rhomel-portfolio-a0305.web.app";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/$/, "");
