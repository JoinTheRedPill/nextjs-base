import { useTranslation } from "next-i18next";

const DashboardSidebarMenu = () => {
  const { t } = useTranslation("common");

  return (
    <div className="px-4 py-4 h-full">
      <div className="flex flex-col h-full">
        <div className="grow overflow-hidden overflow-y-auto">
          <p>{t<string>("dashboard.sidebar-menu")}</p>
        </div>

        <div className="flex-none">
          {t<string>("dashboard.sidebar-menu-footer")}
        </div>
      </div>
    </div>
  );
};
export default DashboardSidebarMenu;
