import { useTranslation } from "next-i18next";

import { SignOutButton } from "@states";

const DashboardHeader = () => {
  const { t } = useTranslation("common");
  return (
    <div className="flex items-center justify-between w-full">
      <p className="pl-4 lg:pl-0">{t<string>("dashboard.header")}</p>
      <SignOutButton />
    </div>
  );
};

export default DashboardHeader;
