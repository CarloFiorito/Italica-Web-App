import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const Header = () => {
  return (
    <div className="flex flex-row gap-8 justify-between items-center px-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-zinc-100 h-28">
      <div className="flex items-center gap-4 text-2xl">
        <Image src={logo} height={60} />
        <p>Italica Roleplay</p>
      </div>
      <div className="flex gap-8">
        <Link href="">About</Link>
        <Link href="">Contatti</Link>
        <Link href="">Il verbo di merlino</Link>
      </div>
    </div>
  );
};

export default Header;
