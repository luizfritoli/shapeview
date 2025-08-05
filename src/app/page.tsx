import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Search from "./components/search/Search";

import "./globals.css";

const Page = () => {
  return (
    <div className="">
      <section>
        <Menu />
        <About />
        <Search />
      </section>
    </div>
  );
};

export default Page;
