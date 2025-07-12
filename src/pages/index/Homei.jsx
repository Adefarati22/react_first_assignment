import HomeCom from "../../component/homeCom";
import NavIndex from "../../component/NavIndex";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";

export default function Homei() {
  const [sideBarOpen, setSidebarOpen] = useState(false);

  const toggleBarOpen = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <div>
      <aside className="w-64 bg-base-200 hidden lg:block">
        <NavIndex />
      </aside>
      <div className=" container mx-auto p-8">
        {/* mobile viewing */}
        <div className="relative">
          <button
            className="lg:hidden absolute top-4 right-4 z-50"
            onClick={toggleBarOpen}
          >
            {sideBarOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
          {/* side bar */}
          <div
            className={`fixed top-0 left-0 z-50 h-full w-64 bg-base-200 transform transition-transform duration-300 ease-in-out lg:hidden ${
              sideBarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <NavIndex />
          </div>
        </div>

        <div className="pt-0 lg:pt-16 ">
          <div className="animate-pulse bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 text-sm font-medium transition-opacity duration-500 hidden lg:block">
            ⚠️ This project is for educational purposes only. It is not intended
            for commercial use.
          </div>

          <HomeCom />
        </div>
      </div>
    </div>
  );
}
