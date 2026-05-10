import { Outlet } from "react-router"
import { SiteHeader } from "./SiteHeader"

export const AppLayout = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
    </>
  )
}