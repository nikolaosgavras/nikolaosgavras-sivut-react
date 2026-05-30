import { Outlet } from "react-router"
import { SiteHeader } from "./SiteHeader"
import { SiteFooter } from "./SiteFooter"
import { MeshBackground } from "./MeshBackground"

export const AppLayout = () => {
  return (
    <>
      <MeshBackground />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}