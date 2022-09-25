import Image from "next/image";

const Header = () => {
  return (
    <header className="container mx-auto">
      <div className="flex flex-row justify-between items-center py-4">
        <menu className="flex flex-row justify-between w-9/12 [&>li]:text-my-red [&>li]:font-semibold [&>li]:uppercase">
          <li>о проекте</li>
          <li>категории конкурса</li>
          <li>призы</li>
          <li>новости</li>
          <li>партнеры</li>
          <li>герои</li>
        </menu>

        <div id="vk_logo" className="">
          <Image src={"/vk.webp"} width={200} height={50} />
        </div>
      </div>
    </header>
  );
};

export default Header;
