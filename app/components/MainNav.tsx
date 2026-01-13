"use client";

import Image from "next/image";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const MainNav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className="flex flex-col items-center fixed top-0 left-0 right-0 z-50">
      <section
        className="flex flex-row gap-4 justify-between h-40 container bg-blue-950/90 bg-[url(/balao14.jpg)] bg-contain bg-center bg-no-repeat bg-blend-multiply items-center shadow-lg shadow-blue-300"
        id="inicio"
      >
        <div className="flex flex-row gap-3 md:gap-8 items-center">
          <div className="min-w-24 p-4 ml-1">
            <Image src="/SBEV-2.png" alt="Logo" width={76} height={76} />
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-4xl 2xl:text-5xl min-w-44 font-bold text-blue-300">
              SBEV
            </div>
            <div className="text-blue-300 max-w-xs xl:max-w-2xl 2xl:text-2xl">
              Associação Brasileira dos Profissionais de Ensaios em Voo
            </div>
          </div>
        </div>

        <button
          className="text-blue-300 hover:cursor-pointer hover:text-white h-fit md:hidden mr-6 hover:scale-125"
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <IoMenu size={35} />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <Menu />
        </nav>
      </section>

      <div className="absolute top-50 right-0">
        {/* Mobile Menu */}
        {isMenuActive && (
          <div className="md:hidden">
            <MobileMenu />
          </div>
        )}
      </div>
    </div>
  );
};
export default MainNav;
