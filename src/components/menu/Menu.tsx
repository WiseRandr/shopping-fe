import { Link, useLocation } from "react-router-dom"
import { Card, Divider, Icon } from "../../ui"
import { twMerge } from "tailwind-merge";

const menus = [
  { path: "/", title: "Home", icon: "home" },
  { path: "/products", title: "Products", icon: "inventory_2" },
  { path: "/offers", title: "Special Offers", icon: "inventory" },
  { path: "/checkout", title: "Checkout", icon: "shopping_cart_checkout" },
  { path: "/contact", title: "Contact", icon: "contact_support" },
]

export function Menu() {
  const location = useLocation();

  return (
    <Card className="h-full">
      <div className="font-semibold bg-lime-600 text-white p-4 rounded-t-md flex items-center">
        <Icon name="menu" />
        <div className="px-2">Menu</div>
      </div>

      <Divider />

      <div>
        {menus.map((menu) => {
          const selected = menu.path === location.pathname;

          return (
          <Link key={menu.path} to={menu.path} className={twMerge("px-4 py-3 border-b flex items-center hover:bg-indigo-500 hover:text-white transition", selected && "bg-indigo-500 text-white")}>
            <Icon name={menu.icon} />
            <div className="flex-1 font-semibold px-2">{menu.title}</div>
            <Icon name="arrow_forward" />
          </Link>
        )})}
      </div>
    </Card>
  )
}
