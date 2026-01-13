const MobileMenu = () => {
  const menuItem = [
    { index: 1, item: "Sobre", href: "#about" },
    { index: 2, item: "História", href: "#history" },
    { index: 3, item: "Notícias", href: "#noticias" },
    { index: 4, item: "Calendário", href: "#calendario" },
    { index: 5, item: "Filiação", href: "#filiacao" },
    { index: 6, item: "Links", href: "#links" },
  ];

  return (
    <div className="flex flex-col bg-blue-100 p-3 gap-3 border-1 border-blue-200 rounded-md shadow-xl shadorw-blue-900 mt-[-80px]">
      {menuItem.map((item) => (
        <a
          key={item.index}
          href={item.href}
          className="text-blue-950 hover:text-blue-600/50 text-xl w-fit hover:-translate-y-1 hover:scale-110 hover:border-b-1"
        >
          {item.item}
        </a>
      ))}
    </div>
  );
};
export default MobileMenu;
