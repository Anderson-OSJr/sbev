"use client";

import Image from "next/image";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const MainMenu = () => {
  const menuItem = [
    { index: 1, item: "Início", href: "#inicio" },
    { index: 2, item: "A SBEV", href: "#sobre" },
    { index: 3, item: "Boas-vindas", href: "#boasVindas" },
    { index: 4, item: "História", href: "#historia" },
    { index: 5, item: "Notícias", href: "#noticias" },
    { index: 6, item: "Calendário", href: "#calendario" },
    { index: 7, item: "Filiação", href: "#filiacao" },
    { index: 8, item: "Links Úteis", href: "#links" },
  ];

  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <section
      className="flex flex-row gap-10 h-40 bg-blue-950 items-center"
      id="inicio"
    >
      <div className="flex flex-row gap-8 items-center">
        <div className="min-w-24 p-4 ml-2">
          <Image src="/SBEV-2.png" alt="Logo" width={76} height={76} />
        </div>

        <div className="flex flex-col">
          <div className="text-4xl min-w-48 font-bold text-blue-200">SBEV</div>
          <div className="text-blue-200">
            Associação Brasileira dos Profissionais de Ensaios em Voo
          </div>
        </div>
      </div>
      <button className="text-blue-200 hover:cursor-pointer hover:text-white h-fit md:hidden">
        <IoMenu size={35} />
      </button>
      <nav>
        {isMenuActive &&
          menuItem.map((item) => (
            <a key={item.index} href={item.href}>
              {item.item}
            </a>
          ))}
      </nav>
    </section>
  );
};
export default MainMenu;
