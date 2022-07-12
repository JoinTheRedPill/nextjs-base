import { useTranslation } from "next-i18next";

import { ExampleList } from "@states";
import { LanguageSelector, ThemeSelector } from "@modules";
import { FormLabel } from "@jointheredpill/react-component-library";

const HomeTemplate = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <main className="space-y-8">
        <h1 className="bg-theme-brand text-theme-brand-content text-xl font-bold px-2 py-1">
          {t<string>("welcome")}
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <FormLabel>{t<string>("theme")}</FormLabel>
            <ThemeSelector />
          </div>

          <div className="flex flex-col">
            <FormLabel>{t<string>("language")}</FormLabel>
            <LanguageSelector />
          </div>
        </div>

        <ExampleList />
      </main>
    </div>
  );
};

export default HomeTemplate;
