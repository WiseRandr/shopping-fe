import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./home/Home";
import { ProductsPage } from "./products/Products";
import { OffersPage } from "./offers/Offers";
import { CheckoutPage } from "./checkout/Checkout";
import { ContactPage } from "./contact/Contact";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/offers", element: <OffersPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "/contact", element: <ContactPage /> },
])

export function Routes() {
  return (
    <RouterProvider router={router} />
  )
}