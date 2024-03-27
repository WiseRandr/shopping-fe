import { PageContainer, Products } from "../../components";
import { Card } from "../../ui";

export function HomePage() {
  return (
    <PageContainer>
      <Card className="h-[500px]"></Card>

      
      <div className="mt-5">
        <Products products={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      </div>
    </PageContainer>
  )
}