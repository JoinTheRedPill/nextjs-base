import {
  Container,
  DashboardLayout,
} from "@jointheredpill/react-component-library";

import { DashboardHeader, DashboardSidebarMenu } from "./components";
import { Logo } from "@elements";

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardLayout
      logo={<Logo />}
      header={<DashboardHeader />}
      sidebar={<DashboardSidebarMenu />}
    >
      <Container className="py-4">{children}</Container>
    </DashboardLayout>
  );
};

export default LayoutDashboard;
