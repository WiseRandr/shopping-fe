import { PageContainer, Products } from "../../components";
import { useProductStore } from "../../store";

export function ProductsPage() {
  const { products } = useProductStore();
  
  return (
    <PageContainer>
      <Products products={products} />
    </PageContainer>
  )
}