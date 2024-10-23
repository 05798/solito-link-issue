import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

export default function Link({ href, children }: { href: string } & PropsWithChildren ) {
  const router = useRouter()

  return (
    <div onClick={() => {router.push(href)}}>
      {children}
    </div>
  )

}