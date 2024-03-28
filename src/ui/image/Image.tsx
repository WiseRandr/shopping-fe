import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export function Image(props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  return <img alt="shopping" {...props} />
}