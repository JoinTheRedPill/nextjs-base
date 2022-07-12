import { useRouter } from "next/router";

import { Dropdown } from "@elements";

const languageProps: any = {
  es: {
    name: "🇪🇸 Español",
  },
  en: {
    name: "🇬🇧 English",
  },
};

interface Language {
  slug: string;
  name: string;
}

const LanguageSelector = () => {
  const router = useRouter();
  const defaultLanguage = "es";
  const { locale = defaultLanguage, pathname, replace, asPath, query } = router;

  const getLanguageProps = (slug: string): Language => {
    if (languageProps.hasOwnProperty(slug)) {
      let { name } = languageProps.hasOwnProperty(slug)
        ? languageProps[slug]
        : languageProps[defaultLanguage];
      return {
        name,
        slug,
      };
    }
    return {
      name: slug,
      slug,
    };
  };

  const currentLanguage = getLanguageProps(locale);
  const languages = (router.locales || []).map(getLanguageProps);

  const handleLanguageSelected = (ev: any) => {
    const languageSelected = ev.target.value;
    replace({ pathname, query }, asPath, { locale: languageSelected });
  };

  return (
    <Dropdown onChange={handleLanguageSelected}>
      {languages.map((language: Language) => (
        <option
          value={language.slug}
          selected={currentLanguage.slug === language.slug}
        >
          {language.name}
        </option>
      ))}
    </Dropdown>
  );
};

export default LanguageSelector;
