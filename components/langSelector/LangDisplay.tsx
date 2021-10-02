import Image from "next/image";

type Props = {
  lang: string;
  path: string;
  label: string;
  changeLocale?: (lang: string) => void;
};

const LangDisplay: React.FC<Props> = ({ path, lang, label, changeLocale }) => {
  return (
    <div
      className="cursor-pointer flex items-center p-4"
      onClick={() => changeLocale && changeLocale(lang)}
    >
      <Image src={path} alt={lang} width={32} height={32} />
      <span className="pl-4">{label}</span>
    </div>
  );
};

export default LangDisplay;
