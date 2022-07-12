import { useTranslation } from "next-i18next";

const DashboardHeader = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <p>{t<string>("dashboard.header")}</p>
    </div>
  );
};

export default DashboardHeader;
