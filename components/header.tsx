import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header id={'header'} className="container w-full sm:mx-10 lg:mx-auto">
      <div className="sm:hidden lg:flex flex-row justify-between items-center py-4">
        <menu className="flex flex-row justify-between w-9/12 [&>li]:text-my-red [&>li]:font-semibold [&>li]:uppercase">
          <li><a href={'#about'}>о проекте</a></li>
          <li><a href={'#categories'}>категории конкурса</a></li>
          <li><a href={'#prizes'}>призы</a></li>
          <li><a href={'#news'}>новости</a></li>
          <li><a href={'#partheners'}>партнеры</a></li>
          <li><a href={'#heroes'}>герои</a></li>
          
        </menu>

        <div id="vk_logo" className="">
          <Image src={"/vk.webp"} width={200} height={50} />
        </div>
      </div>

      <nav>
        <section className="MOBILE-MENU lg:hidden py-10">
          <div
            className="HAMBURGER-ICON space-y-3"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-1 w-12 animate-pulse bg-my-red"></span>
            <span className="block h-1 w-12 animate-pulse bg-my-red"></span>
            <span className="block h-1 w-12 animate-pulse bg-my-red"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col gap-6 items-center justify-between bg-white min-h-[250px] w-full [&>li]:border-b [&>li]:border-gray-400 [&>li]:my-8 [&>li]:uppercase">
              <li>
                <a href="/management">о проекте</a>
              </li>
              <li>
                <a href="/structure">категории конкурса</a>
              </li>
              <li>
                <a href="/documents">призы</a>
              </li>
              <li>
                <a href="/posts">новости</a>
              </li>
              <li>
                <a href="/vacancy">партнеры</a>
              </li>
              <li>
                <a href="/contacts">герои</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>

      <style>{`
      .hideMenuNav {
        display: none;
      }

      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        // background: black;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </header>
  );
};

export default Header;
