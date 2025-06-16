import { ProductsPage } from "@/components/products/ProductsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/products")({
  component: ProductsPage,
});
