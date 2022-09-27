import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container w-full mx-auto py-10">

      <div className="flex sm:flex-col md:flex-row justify-between items-center w-full">
        <div>
          <Image src={"/pgrants_logo_gp.png"} width={300} height={143} />{" "}
        </div>

        <div className="w-7/12">
          <div className="flex justify-end">
            <button className="rounded-lg border-2 border-my-red text-my-red font-semibold py-2 px-4">
              Группа ВК
            </button>
          </div>

          <div className="flex sm:flex-col lg:flex-row justify-between items-center py-4">
            <menu className="flex sm:flex-col lg:flex-row justify-between w-full [&>li]:text-my-red [&>li]:font-semibold [&>li]:uppercase [&>li]:cursor-pointer">
              <li><a href={'#about'}>о проекте</a></li>
              <li><a href={'#categories'}>категории конкурса</a></li>
              <li><a href={'#prizes'}>призы</a></li>
              <li><a href={'#news'}>новости</a></li>
              <li><a href={'#partheners'}>партнеры</a></li>
              <li><a href={'#heroes'}>герои</a></li>
            </menu>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <a href={'#header'} className="rounded-full border-my-red border-2 shadow-md shadow-my-red">
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
        </a>
      </div>
    </footer>
  );
};

export default Footer;
