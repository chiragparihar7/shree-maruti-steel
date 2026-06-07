// /app/products/[slug]/page.jsx

import { notFound } from "next/navigation";

import { products } from "@/components/products/ProductData";

import ProductHero from "@/components/product/ProductHero";
import ProductOverview from "@/components/product/ProductOverview";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductSpecificationTable from "@/components/product/ProductSpecificationTable";
import ProductApplications from "@/components/product/ProductApplications";

import ProductFAQ from "@/components/product/ProductFAQ";
import ProductCTA from "@/components/product/ProductCTA";

export default async function ProductPage({ params }) {

  // IMPORTANT
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  // 404 PAGE
  if (!product) {
    notFound();
  }

  return (
    <main className="bg-white overflow-hidden">

      <ProductHero product={product} />

      <ProductOverview product={product} />

      <ProductFeatures product={product} />

      <ProductSpecificationTable product={product} />

      <ProductApplications product={product} />

   

      <ProductFAQ product={product} />

      <ProductCTA />

    </main>
  );
}