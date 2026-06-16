import { MetadataRoute } from "next";

const baseUrl = "https://www.shreemarutisteel.in";

const productSlugs = [
  "stainless-steel-pipes",
  "ms-gi-erw-pipes",
  "cs-seamless-pipes",
  "alloy-steel-pipes",
  "stainless-steel-plates",
  "boiler-steel-plates",
  "ss-pipe-fittings",
  "cs-pipe-fittings",
  "hydraulic-tube-fittings",
  "industrial-valves",
  "nut-bolt-washer",
  "threaded-rod",
  "rivets",
  "fire-safety-equipment",
  "hand-tools",
  "brass-fittings",
  "copper-fittings",
  "pressure-gauges",
  "temperature-gauges",
  "gauge-accessories",
  "bearings",
  "bushings",
  "wire-products",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/products",
    "/industries",
    "/calculators",
    "/certifications",
    "/contact",
  ];

  const staticUrls = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const productUrls = productSlugs.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...productUrls];
}