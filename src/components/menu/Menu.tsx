import { Link } from "react-router-dom"
import { Card, Divider, Icon } from "../../ui"

const menus = [
  { path: "/", title: "Home", icon: "home" },
  { path: "/products", title: "Products", icon: "inventory_2" },
  { path: "/offers", title: "Offers", icon: "inventory" },
  { path: "/checkout", title: "Checkout", icon: "shopping_cart_checkout" },
  { path: "/contact", title: "Contact", icon: "contact_support" },
]

export function Menu() {
  return (
    <Card className="h-full">
      <div className="font-semibold bg-lime-600 text-white p-4 rounded-t-md flex items-center">
        <Icon name="menu" />
        <div className="px-2">Menu</div>
      </div>

      <Divider />

      <div>
        {menus.map((menu) => (
          <Link key={menu.path} to={menu.path} className="px-4 py-3 border-b flex items-center hover:bg-gray-100 transition">
            <Icon name={menu.icon} />
            <div className="flex-1 font-semibold px-2">{menu.title}</div>
            <Icon name="arrow_forward" />
          </Link>
        ))}
      </div>
    </Card>
  )
}
