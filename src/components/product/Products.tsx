import { IProduct } from "../../type";
import { Product } from "./Product";

interface IProps {
  products: IProduct[]
}

export function Products({ products }: IProps) {
  return (
    <div className="grid grid-cols-12 gap-3">
      {products.map((product) => (
        <div key={product.id} className="col-span-4">
          <Product product={product} />
        </div>
      ))}
    </div>
  )
}