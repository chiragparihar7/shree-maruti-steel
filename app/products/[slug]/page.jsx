// app/products/[slug]/page.jsx

import { notFound } from "next/navigation";

import { products } from "@/components/products/ProductData";
import { productSEO } from "@/lib/product-seo";

import ProductHero from "@/components/product/ProductHero";
import ProductOverview from "@/components/product/ProductOverview";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductSpecificationTable from "@/components/product/ProductSpecificationTable";
import ProductApplications from "@/components/product/ProductApplications";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductCTA from "@/components/product/ProductCTA";

// ==============================
// DYNAMIC SEO
// ==============================

export async function generateMetadata({ params }) {
const { slug } = await params;

const product = products.find(
(item) => item.slug === slug
);

const seo = productSEO[slug];

if (!product || !seo) {
return {
title: "Product Not Found | Shree Maruti Steel",
};
}

return {
title: seo.title,


description: seo.description,

keywords: seo.keywords,

alternates: {
  canonical: `https://www.shreemarutisteel.in/products/${slug}`,
},

openGraph: {
  title: seo.title,

  description: seo.description,

  url: `https://www.shreemarutisteel.in/products/${slug}`,

  siteName: "Shree Maruti Steel",

  type: "website",

  locale: "en_IN",

  images: [
    {
      url: product.image,
      width: 1200,
      height: 630,
      alt: product.title,
    },
  ],
},

twitter: {
  card: "summary_large_image",

  title: seo.title,

  description: seo.description,

  images: [product.image],
},

robots: {
  index: true,
  follow: true,
},


};
}

// ==============================
// PAGE
// ==============================

export default async function ProductPage({
params,
}) {
const { slug } = await params;

const product = products.find(
(item) => item.slug === slug
);

if (!product) {
notFound();
}

const seo = productSEO[slug];

// PRODUCT SCHEMA
const schema = {
"@context": "https://schema.org",


"@type": "Product",

name: product.title,

description:
  seo?.description || product.title,

image: product.image,

brand: {
  "@type": "Brand",
  name: "Shree Maruti Steel",
},

manufacturer: {
  "@type": "Organization",
  name: "Shree Maruti Steel",
  url: "https://www.shreemarutisteel.in",
},

category: "Industrial Steel Products",

url: `https://www.shreemarutisteel.in/products/${slug}`,


};

return (
<>
{/* PRODUCT SCHEMA */}
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(schema),
}}
/>


  <main className="overflow-hidden bg-white">
    <ProductHero product={product} />

    <ProductOverview product={product} />

    <ProductFeatures product={product} />

    <ProductSpecificationTable
      product={product}
    />

    <ProductApplications
      product={product}
    />

    <ProductFAQ product={product} />

    <ProductCTA />
  </main>
</>


);
}
