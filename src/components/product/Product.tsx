import { IProduct } from "../../type";
import { Button, Card, Chip, Icon, Image } from "../../ui";
import productImage from "../../assets/product.png";

interface IProps {
  product: IProduct
}

export function Product({ product }: IProps) {
  return (
    <Card>
      <div className="h-[350px]">
        <Image src={productImage} className="d-block h-full w-full object-cover" />
      </div>
      <div className="flex flex-col p-5 bg-gray-100">
        <div className="mb-10 flex items-center justify-between">
          <div className="font-bold text-xl">{product.name}</div>
          <Chip>{product.currency} {product.price}</Chip>
        </div>

        <div className="flex items-center justify-center">
          <Button>
            <Icon name="add_shopping_cart" />
            <span className="ml-2">Add to cart</span>
          </Button>
        </div>
      </div>
    </Card>
  )
}