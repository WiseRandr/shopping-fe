import { PageContainer, Products } from "../../components";
import { useProductStore } from "../../store";
import { Card } from "../../ui";

export function HomePage() {
  const { products } = useProductStore();
  
  return (
    <PageContainer>
      <Card className="h-[500px]"></Card>

      <div className="mt-5">
        <Products products={products} />
      </div>
    </PageContainer>
  )
}