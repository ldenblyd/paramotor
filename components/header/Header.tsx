import Link from "next/link";
import LangSelector from "./LangSelector";

const Header: React.FC = () => {
  return (
    <header className="text-gray-600 body-font flex justify-between items-center uppercase p-4 pb-8">
      <nav className="">
        <Link href="/">
          <a className="p-4">home</a>
        </Link>
        <Link href="/engine/list">
          <a className="p-4">engines</a>
        </Link>
        <Link href="/propeller/list">
          <a className="p-4">propellers</a>
        </Link>
        <Link href="/seat/list">
          <a className="p-4">seats</a>
        </Link>
        <Link href="/wing/list">
          <a className="p-4">wings</a>
        </Link>
        <Link href="/paramotor/list">
          <a className="p-4">paramotors</a>
        </Link>
      </nav>

      <LangSelector />
    </header>
  );
};

export default Header;
