import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import AuthMenu from "components/auth/AuthMenu";

const Header: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <header className="flex justify-between items-center uppercase p-4 pb-8">
      <nav>
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
        <AuthMenu />
      </div>
    </header>
  );
};

export default Header;
