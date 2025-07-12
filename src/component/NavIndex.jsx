import { NavLink } from "react-router"
import { navLink2 } from "../utils/nav2"

export default function NavIndex() {
  return (
    <nav className="container mx-auto p-6 flex flex-col lg:flex-row justify-between items-center fixed top-0 left-0 w-full bg-white ">
      <NavLink to="/home"><img src="/public/logo-cQYmEuE8.svg" alt="Logo"/></NavLink>
      <div className="flex flex-col lg:flex-row gap-6 items-center">
      {navLink2.map((link) => (
        <NavLink
        key={link.id }
        to={link.path}
        className={({ isActive }) => isActive ? "text-[#974FD0] font-bold" : "text-gray-600"}
        >
            {link.title} 
        </NavLink>
      ))}
      </div>
    </nav>
  )
}
