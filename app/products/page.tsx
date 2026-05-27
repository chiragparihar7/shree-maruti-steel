import ProductHero from "@/components/products/ProductHero";
import ProductCategories from "@/components/products/ProductCategories";
import ProductGrid from "@/components/products/ProductGrid";
import ProductCTA from "@/components/products/ProductCTA";

export default function ProductsPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <ProductHero />

      {/* CATEGORIES */}
      <ProductCategories />

      {/* PRODUCT GRID */}
      <ProductGrid />

      {/* CTA */}
      <ProductCTA />
    </main>
  );
}