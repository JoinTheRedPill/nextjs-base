interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => (
  <div className="p-4">{children}</div>
);

export default DashboardLayout;
