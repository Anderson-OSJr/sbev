import About from "./components/About";
import History from "./components/History";
import MainNav from "./components/MainNav";

export default function Home() {
  return (
    <>
      <header>
        <MainNav />
      </header>

      <main>
        <About />
        <History />
      </main>

      <footer></footer>
    </>
  );
}
