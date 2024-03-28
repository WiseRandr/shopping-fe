import { useProductStore } from "../store";
import { prefetch } from "./prefetch";

export async function productsPrefetch() {
  const products = await prefetch("/products");

  if (products) {
    useProductStore.setState({ products: products.data.data });
  }
}