import Image from "next/image";

const Categories = () => {
  return (
    <div className="container mx-auto flex flex-col gap-7 justify-center items-center">
      <div className="w-full text-center font-semibold text-my-red text-[calc(40px)] py-5 mx-auto font-monserrat">
        <p>Категории конкурса</p>
      </div>

      <div id="pen" className="flex justify-center items-center">
        <div className="w-3/12">
          <Image src={"/pen.webp"} width={280} height={300} className="" />
        </div>

        <div className="flex flex-col gap-4 w-6/12">
          <h1 className="text-[calc(30px)] font-semibold tracking-wide">
            Рассказ о реальном папе.
          </h1>
          <p className="text-[calc(18px)] font-light">
            Это история о реальном папе в формате текста с добавлением
            фотографий или рисунков. Текст может быть как прозаическим, так и в
            стихах.
          </p>
        </div>
      </div>

      <div id="movie" className="flex justify-center items-center">
        <div className="w-3/12">
          <Image src={"/movie.webp"} width={280} height={300} className="" />
        </div>

        <div className="flex flex-col gap-4 w-6/12">
          <h1 className="text-[calc(30px)] font-semibold tracking-wide">
            Видео история реального папы.
          </h1>
          <p className="text-[calc(18px)] font-light">
            Это история о реальном папе в формате текста с добавлением
            фотографий или рисунков. Текст может быть как прозаическим, так и в
            стихах.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="w-[calc(480px)] h-[calc(60px)] rounded-xl bg-my-red text-white">
          Участвовать в конкурсе
        </button>
      </div>
    </div>
  );
};

export default Categories;
