const News = () => {
  const years = [
    { index: 1, year: "2021" },
    { index: 2, year: "2022" },
    { index: 3, year: "2023" },
    { index: 4, year: "2024" },
    { index: 5, year: "2025" },
    { index: 6, year: "2026" },
  ];

  return (
    <section id="news" className="flex flex-col items-center mt-10 pt-40">
      <div className="flex flex-col container justify-between gap-8 items-start relative px-4">
        <div className="">
          <h1 className="mt-4 text-4xl font-bold text-amber-500 text-shadow-sm text-shadow-amber-950 ">
            SBEV News
          </h1>
        </div>

        <div className="flex flex-row-reverse gap-10">
          {years.map((year) => (
            <div
              key={year.index}
              className="bg-white p-6 rounded-lg shadow-lg shadow-blue-950"
            >
              <a href="#" className="text-2xl text-blue-900">
                {year.year}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default News;
