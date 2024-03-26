import { PropsWithChildren } from "react";

export function PageContainer({ children }: PropsWithChildren) {
  return <div className="min-h-[100vh]">{children}</div>
}
