import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const Header: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <header className="text-gray-600 body-font flex justify-between items-center uppercase p-4 pb-8">
      <nav className="">
        <Link href="/">
          <a className="p-4">{t("header.home")}</a>
        </Link>
        <Link href="/engine/list">
          <a className="p-4">{t("categories.engines")}</a>
        </Link>
        <Link href="/propeller/list">
          <a className="p-4">{t("categories.propellers")}</a>
        </Link>
        <Link href="/seat/list">
          <a className="p-4">{t("categories.seats")}</a>
        </Link>
        <Link href="/wing/list">
          <a className="p-4">{t("categories.wings")}</a>
        </Link>
        <Link href="/paramotor/list">
          <a className="p-4">{t("categories.paramotors")}</a>
        </Link>
      </nav>
      <div className="cursor-pointer">
        <Image src="/icons/user.svg" alt="user" width={32} height={32} />
      </div>
    </header>
  );
};

export default Header;
