import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="text-gray-600 body-font">
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/">
          <a className="p-4">home</a>
        </Link>
        <Link href="/engines">
          <a className="p-4">engines</a>
        </Link>
        <Link href="/propellers">
          <a className="p-4">propellers</a>
        </Link>
        <Link href="/seats">
          <a className="p-4">seats</a>
        </Link>
        <Link href="/wings">
          <a className="p-4">wings</a>
        </Link>
        <Link href="/paramotors">
          <a className="p-4">paramotors</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
