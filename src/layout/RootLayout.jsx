import Nav from "../component/Nav"
import { Outlet } from "react-router"

export default function RootLayout() {
  return (
    <div>
      <Nav/>
     <div className="pt-16"> <Outlet/></div>
    </div>
  )
}
