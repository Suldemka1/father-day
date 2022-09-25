import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-auto py-10">
      <div className="flex flex-row justify-between items-center w-full">
        <div>
          <Image src={"/pgrants_logo_gp.png"} width={300} height={143} />{" "}
        </div>

        <div className="w-7/12">
          <div className="flex justify-end">
            <button className="rounded-lg border-2 border-my-red text-my-red font-semibold py-2 px-4">
              Группа ВК
            </button>
          </div>

          <div className="flex flex-row justify-between items-center py-4">
            <menu className="flex flex-row justify-between w-full [&>li]:text-my-red [&>li]:font-semibold [&>li]:uppercase [&>li]:cursor-pointer">
              <li>о проекте</li>
              <li>категории конкурса</li>
              <li>призы</li>
              <li>новости</li>
              <li>партнеры</li>
              <li>герои</li>
            </menu>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="rounded-full border-my-red border-2 shadow-md shadow-my-red">
          <svg width={50} height={50}>
            <rect
              width={50}
              height={50}
              rx={50}
              fill="#fff"
              fillOpacity={0.9}
            />
            <path d="M14 28L25 18l10 10" stroke="#850303" strokeWidth={1} />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
