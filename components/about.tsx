import Image from "next/image";
import SectionLayout from "../layout/sectionLayout";
import Pagename from "./pagename";

const About = () => {
  return (
    <SectionLayout id={'about'} className="container mx-auto bg-[url('/io.webp')] bg-no-repeat">
      <div id="header" className="">
        <Pagename title={'О проекте'} />
      </div>

      <div id="target" className="flex flex-row justify-center">
        <div className="flex flex-col gap-14 sm:w-full lg:w-7/12 [&>p]:text-[calc(22px)] [&>p]:font-semibold">
          <p className=" text-my-red ">
            Цель программы «РЕАЛЬНЫЙ ПАПА» – мотивировать российских отцов на
            примерах активных участников проекта, больше качественного времени
            проводить с детьми.
          </p>

          <p>
            С 11 апреля проводится всероссийский конкурс, в котором семьи смогут
            рассказать о своих «реальных папах» и лучших примерах воспитания.
          </p>

          <p>
            Также к сотрудничеству привлечены отцы, ставшие известными в России.
            На онлайн-площадке Союза отцов они рассказывают о своем понимании
            отцовства, о воспитании, принципах жизни и ценностях. ﻿Всего
            запланировано более десяти встреч, по итогам которых участники
            проекта получат советы, как лучше организовать свое время с
            ребенком.
          </p>

          <div className="flex flex-row gap-5">
            <button className="w-[calc(200px)] text-white bg-my-red rounded-xl py-3">
              Посмотреть встречи
            </button>
            <button className="w-[calc(200px)] text-white bg-my-red rounded-xl py-3">
              Участвовать в конкурсе
            </button>
          </div>
        </div>

        <div className="sm:hidden lg:block">
          <Image src={"/reading.webp"} width={476} height={630} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default About;
