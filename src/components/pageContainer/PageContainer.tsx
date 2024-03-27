import { PropsWithChildren } from "react";
import { Header } from "../header/Header";
import { Menu } from "../menu/Menu";

export function PageContainer({ children }: PropsWithChildren) {
  return (
    <div className="min-h-[100vh] bg-gray-200 flex flex-col">
      <Header />

      <div className="grid grid-cols-12 h-full flex-1">
        <div className="col-span-4 px-5 py-3 h-full">
          <Menu />
        </div>
        <div className="col-span-8 py-3 pr-3">{children}</div>
      </div>
    </div>
  )
}
