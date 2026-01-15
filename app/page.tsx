import About from "./components/About";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import History from "./components/History";
import Links from "./components/Links";
import MainNav from "./components/MainNav";
import Membership from "./components/Membership";
import News from "./components/News";

export default function Home() {
  return (
    <>
      <header>
        <MainNav />
      </header>

      <main>
        <About />
        <History />
        <News />
        <Calendar />
        <Membership />
        <Links />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
