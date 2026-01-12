import About from "./components/About";
import MainNav from "./components/MainNav";

export default function Home() {
  return (
    <>
      <header>
        <MainNav />
      </header>

      <main>
        <About />
      </main>

      <footer></footer>
    </>
  );
}
