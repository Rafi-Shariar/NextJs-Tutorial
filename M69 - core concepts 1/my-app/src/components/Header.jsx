import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="px-4 py-3 border-b-2 flex justify-between items-center flex-wrap">
        <h1 className="font-bold text-4xl">Dev Story</h1>
        <nav className="space-x-5">
          <Link href="/about">About</Link>
          <Link href="/tutorials">tutorials</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/login">login</Link>
          <Link href="/register">Register</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
