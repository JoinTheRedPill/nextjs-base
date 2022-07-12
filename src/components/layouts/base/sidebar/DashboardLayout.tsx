import React, { useState } from "react";
import Header from "./partials/Header";
import Sidebar from "./partials/Sidebar";

import "./Dashboard.css";

export interface DashboardLayoutProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  logo: React.ReactNode;
  sidebar?: React.ReactNode;
}

const DashboardLayout = ({
  children,
  footer,
  header,
  logo,
  sidebar,
}: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Sidebar */}
      {sidebar && (
        <Sidebar
          logo={logo}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        >
          {sidebar}
        </Sidebar>
      )}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden h-full">
        {/*  Site header */}
        {header && (
          <Header
            hasSidebar={!!sidebar}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          >
            {header}
          </Header>
        )}

        <main className="flex-1">
          <div className="w-full h-full max-w-9xl mx-auto overflow-y-auto">
            {children}
          </div>
        </main>

        {footer && <footer>{footer}</footer>}
      </div>
    </div>
  );
};
export default DashboardLayout;
