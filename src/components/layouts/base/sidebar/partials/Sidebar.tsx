import React, { useState, useEffect, useRef } from "react";

interface SidebarProps {
  children: React.ReactNode;
  logo: React.ReactNode;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

function Sidebar({
  children,
  logo,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  useEffect(() => {
    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    setSidebarExpanded(
      storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
    );
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage?.setItem("sidebar-expanded", JSON.stringify(sidebarExpanded));
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <>
      <div>
        {/* Sidebar backdrop (mobile only) */}
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-30 lg:hidden lg:z-auto transition-opacity duration-200 ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ zIndex: 10000 }}
          aria-hidden="true"
          onClick={() => setSidebarOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          id="sidebar"
          ref={sidebar}
          className={`rlc-sidebar flex flex-col absolute left-0 top-0 transform h-screen overflow-y-auto lg:overflow-y-auto no-scrollbar w-64 shrink-0 transition-all duration-200 ease-in-out ${
            sidebarOpen && "open"
          }`}
          style={{ zIndex: 10000 }}
        >
          {/* Sidebar header */}
          <div className="flex justify-between header">
            {/* Close button */}
            <button
              ref={trigger}
              className="rlc-closebutton"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>
            {/* Logo */}
            <div className="block">{logo}</div>
          </div>

          {/* Main sidebar content */}
          <div className="space-y-8 flex-1 content">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
