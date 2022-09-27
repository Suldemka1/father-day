import Image from "next/image";
import SectionLayout from "../layout/sectionLayout";

const Events = () => {
  return (
      <SectionLayout className={''} id={'events'}>
        <div className="h-[calc(880px)] bg-gray py-16">
          <div className="container mx-auto flex flex-col justify-between h-[calc(780px)]">
            <div className="flex flex-row">
              <div className="w-2/6 flex flex-col items-center gap-5">
                <Image
                    src={"/fuck.webp"}
                    width={200}
                    height={200}
                    className="rounded-full"
                />
                <div>
                  <p className="text-2xl font-semibold px-5 text-center">
                    В рамках проекта к 9 мая планируется акция «Песни наших отцов».
                    Семьями поём песни Победы, выкладываем видео в соцсетях.
                  </p>
                </div>
              </div>
              <div className="w-2/6 flex flex-col items-center gap-5">
                <Image
                    src={"/fuck.webp"}
                    width={200}
                    height={200}
                    className="rounded-full"
                />
                <div>
                  <p className="text-2xl font-semibold px-5 text-center">
                    К Международному Дню защиты детей, 1 июня, запланирован флэшмоб
                    «Когда я был ребенком»: в соцсети ВК будут размещаться
                    видеоролики – добрые воспоминания отцов из детства.
                  </p>
                </div>
              </div>
              <div className="w-2/6 flex flex-col items-center gap-5">
                <Image
                    src={"/fuck.webp"}
                    width={200}
                    height={200}
                    className="rounded-full"
                />
                <div>
                  <p className="text-2xl font-semibold px-5 text-center">
                    8-9 июля в ряде городов планируется провести фестиваль «Реальный
                    папа».
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-[calc(480px)] h-[calc(60px)] rounded-xl bg-my-red text-white">Узнать больше о мероприятиях проекта</button>
            </div>
          </div>
        </div>
      </SectionLayout>

  );
};

export default Events;
