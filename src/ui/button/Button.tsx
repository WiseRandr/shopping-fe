import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

export function Button(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return <button {...props} className={twMerge("bg-lime-600 shadow px-5 py-2 text-white font-semibold rounded-md transition hover:scale-105 flex items-center", props.className)} />
}