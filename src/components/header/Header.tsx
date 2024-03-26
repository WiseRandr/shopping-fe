import { Button } from "../../ui";

export function Header() {
  return <header className="bg-white text-black flex justify-between items-center shadow-md px-5 py-2">
     <div className="font-bold">Shopping</div>
     <div></div>
     <div>
        <Button>Log in</Button>
     </div>
  </header>
}