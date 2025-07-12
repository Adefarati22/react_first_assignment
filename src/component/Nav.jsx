import { NavLink } from "react-router"
import { navLink } from "../utils/nav"

export default function Nav() {
  return (
    <nav className="container mx-auto p-4 flex justify-between items-center fixed top-0 left-0 w-full bg-white ">
      <NavLink to="/"><img src="/public/logo-cQYmEuE8.svg" alt="Logo"/></NavLink>
      <div className="flex gap-6 items-center">
      {navLink.map((link) => (
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
