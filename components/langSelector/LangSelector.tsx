import useTranslation from "next-translate/useTranslation";
import useModal from "hooks/useModal";
import setLanguage from "next-translate/setLanguage";
import LangDisplay from "./LangDisplay";

type Locale = {
  lang: string;
  path: string;
  label: string;
};

const LangSelector: React.FC = () => {
  const { lang } = useTranslation("common");
  const { isShowing, toggle, Modal } = useModal();

  const locales: Locale[] = [
    { lang: "fr", path: "/icons/flags/fr.svg", label: "francais" },
    { lang: "en", path: "/icons/flags/en.svg", label: "english" },
    { lang: "de", path: "/icons/flags/de.svg", label: "dutch" },
    { lang: "it", path: "/icons/flags/it.svg", label: "italian" },
    { lang: "sp", path: "/icons/flags/sp.svg", label: "spain" },
  ];

  const currentLocale = locales.find((l) => l.lang === lang);

  const changeLocale = async (lang) => {
    toggle();
    await setLanguage(lang);
  };

  return (
    <div className="relative">
      <div onClick={toggle}>
        <LangDisplay {...currentLocale} />
      </div>

      <Modal isShowing={isShowing} hide={toggle}>
        {locales.map((locale) => (
          <LangDisplay
            key={locale.label}
            {...locale}
            changeLocale={changeLocale}
          />
        ))}
      </Modal>
    </div>
  );
};

export default LangSelector;
