import React from "react";
import NavIndex from "../../component/NavIndex";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";

export default function AllTask() {
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
          <img
            src="/public/logo-cQYmEuE8.svg"
            alt="logo"
            className="block lg:hidden"
          />
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
        <h1 className="text-xl font-bold pt-8 lg:pt-0">All Tasks</h1>
        <p className="text-3xl mt-6">No task created yet</p>
      </div>
    </div>
  );
}
