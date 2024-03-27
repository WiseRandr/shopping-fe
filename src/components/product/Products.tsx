import { Product } from "./Product";

interface IProps {
  products: any[]
}

export function Products({ products }: IProps) {
  return (
    <div className="grid grid-cols-12 gap-3">
      {products.map(k => (
        <div key={k} className="col-span-4">
          <Product />
        </div>
      ))}
    </div>
  )
}