import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="p-4">home</a>
        </Link>
        <Link href="/paramotors">
          <a className="p-4">paramotors</a>
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
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* {user ? (
            <div className="flex items-center space-x-5">
              <Link href="/favorites">
                <a className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                  My Favorites
                </a>
              </Link>
              <Link href="/api/auth/logout">
                <a className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                  Logout
                </a>
              </Link>
              <img
                alt="profile"
                className="rounded-full w-12 h-12"
                src={user.picture}
              />
            </div>
          ) : (
            <Link href="/api/auth/login">
              <a className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Login
              </a>
            </Link>
          )} */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
