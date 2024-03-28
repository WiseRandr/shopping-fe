import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  className?: string;
}

export function Card({ className, children }: PropsWithChildren<IProps>) {
  return <div className={twMerge("shadow-md rounded-md bg-white w-full h-full overflow-hidden", className)}>{children}</div>
}