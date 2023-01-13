import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { VERBO_MERLINO } from "../../constants/routes";

const Header = () => {
  return (
    <div className="relative flex flex-row gap-8 justify-between items-center px-8 text-zinc-100 h-24 rounded z-10">
      <div className="flex items-center gap-4 text-2xl">
        <Image src={logo} height={60} />
        <p>
          <strong>ITALICA ROLEPLAY</strong>
        </p>
      </div>
      <div className="flex gap-16">
        <Link
          href=""
          className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-2 hover:border-button-light-blue-primary"
        >
          HOME
        </Link>
        <Link
          href=""
          className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-2 hover:border-button-light-blue-primary"
        >
          STAFF
        </Link>
        <Link
          href={VERBO_MERLINO}
          className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-2 hover:border-button-light-blue-primary"
        >
          IL VERBO DI MERLINO
        </Link>
      </div>
    </div>
  );
};

export default Header;
