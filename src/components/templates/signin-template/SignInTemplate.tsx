import { useTranslation } from "next-i18next";

import { SignInForm } from "@states";
import { Subtitle, Title } from "@jointheredpill/react-component-library";

const SignInTemplate = () => {
  const { t } = useTranslation("signin");

  return (
    <div className="min-h-screen flex items-center">
      <div className="mx-auto w-full sm:max-w-lg space-y-4">
        <div className="mx-auto w-full h-full flex flex-col lg:flex-row items-center justify-center p-4">
          <div className="w-full bg-theme-base-500 py-8 px-6 md:px-12 space-y-16  border border-theme-base-700 overflow-hidden z-10">
            <div>
              <Title>{t<string>("sign-in-title")}</Title>
              <Subtitle>{t<string>("sign-in-subtitle")}</Subtitle>
            </div>

            <div>
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInTemplate;
