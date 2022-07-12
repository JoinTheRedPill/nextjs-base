import React from "react";

interface HeaderProps {
  children: React.ReactNode;
  hasSidebar: boolean;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

function Header({
  children,
  hasSidebar,
  sidebarOpen,
  setSidebarOpen,
}: HeaderProps) {
  return (
    <>
      <header className="rlc-header sticky top-0 z-40">
        <div className="content">
          <div className="flex items-center justify-between h-16 -mb-px">
            {/* Header: Left side */}
            <div className="flex">
              {/* Hamburger button */}
              {hasSidebar && (
                <button
                  className="rlc-sidebarbutton"
                  aria-controls="sidebar"
                  aria-expanded={sidebarOpen}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="4" y="5" width="16" height="2" />
                    <rect x="4" y="11" width="16" height="2" />
                    <rect x="4" y="17" width="16" height="2" />
                  </svg>
                </button>
              )}
            </div>

            {/* Header: Right side */}
            <div className="flex flex-1 items-center justify-end h-full">
              {children}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
