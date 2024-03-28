import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export function Chip({ children }: PropsWithChildren) {
  return <div className={twMerge("w-fit font-semibold px-3 py-1 rounded-lg", "bg-fuchsia-500 text-white")}>{children}</div>
}
