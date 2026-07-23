import { getProducts, getCategories } from "../../lib/products/api";
import { ProductListing } from "../../components/products/ProductListing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Infalex",
  description: "Explore the Infalex ecosystem of AI applications, developer tools, and automation APIs.",
};

export default function ProductsPage() {
  const products = getProducts();
  const categories = getCategories();

  return (
    <ProductListing products={products} categories={categories} />
  );
}
