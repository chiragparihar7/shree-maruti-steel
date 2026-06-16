import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.shreemarutisteel.in/sitemap.xml",
    host: "https://www.shreemarutisteel.in",
  };
}