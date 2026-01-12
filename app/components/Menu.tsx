const Menu = () => {
  const menuItem = [
    { index: 1, item: "Sobre", href: "#about" },
    { index: 2, item: "História", href: "#historia" },
    { index: 3, item: "Notícias", href: "#noticias" },
    { index: 4, item: "Calendário", href: "#calendario" },
    { index: 5, item: "Filiação", href: "#filiacao" },
    { index: 6, item: "Links", href: "#links" },
  ];
  return (
    <div className="flex flex-col lg:flex-row mr-6 p-3">
      {menuItem.map((item) => (
        <a
          key={item.index}
          href={item.href}
          className="text-blue-900 md:text-blue-300 ml-3 hover:text-blue-200 hover:border-b hover:border-blue-50 w-fit 2xl:text-lg hover:-translate-y-1 hover:scale-110"
        >
          {item.item}
        </a>
      ))}
    </div>
  );
};
export default Menu;
