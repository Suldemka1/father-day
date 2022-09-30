import Image from "next/image";

interface IHero {
	title: string;
	position: string;
	image: string;
}

const HeroCard = (params: IHero) =>
	<div className="flex flex-col gap-5 bg-gray max-w-[calc(260px)]">
		<div>
			<Image src={params.image} width={260} height={260} objectFit="cover"/>
		</div>

		<div className="flex flex-col gap-4 p-3.5">
			<div className="">
				<div>{params.title}</div>
				<div>{params.position}</div>
			</div>

			<div className="w-full flex justify-center">
				<button
					className="w-[calc(200px)] bg-my-red border-my-red rounded text-white font-semibold py-2 px-3">Подробнее
				</button>
			</div>
		</div>
	</div>;


export default HeroCard; 