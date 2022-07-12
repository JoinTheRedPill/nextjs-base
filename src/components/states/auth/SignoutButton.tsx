import { useTranslation } from "next-i18next";

import { Button } from "@jointheredpill/react-component-library";
import { signOutAndDeleteToken } from "@utils";

const SignOutButton = () => {
  const { t } = useTranslation("common");

  const handleSignOut = () => {
    signOutAndDeleteToken();
  };

  return (
    <Button
      type="primary"
      style="text"
      icon="pi pi-power-off"
      className="bg-theme-base-500"
      onClick={handleSignOut}
    >
      {t<string>("sign-out")}
    </Button>
  );
};

export default SignOutButton;
