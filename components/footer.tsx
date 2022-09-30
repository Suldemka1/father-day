import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container w-full mx-auto py-10">

      <div className="flex sm:flex-col md:flex-row justify-between items-center w-full">
        <div className={'flex items-center gap-2.5 font-bold'}>
          <Image alt={'/Tuvsu_logo 2.png'} src={"/Tuvsu_logo 2.png"} width={100} height={100} />{" "}
          <div>
            <p>При поддержке Тувинского</p>
            государственного университета
          </div>

        </div>

        <div className="w-7/12">

          <div className="flex sm:flex-col lg:flex-row justify-between items-center py-4">
            <menu className="flex sm:flex-col lg:flex-row justify-between w-full
            {/*[&>li]:text-my-red */}
            [&>li]:font-bold [&>li]:uppercase [&>li]:cursor-pointer">
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
