import type {NextPage} from "next";
import Image from "next/image";
import About from "../components/about";
import Categories from "../components/categories";
import Events from "../components/events";
import Footer from "../components/footer";
import Header from "../components/header";
import News from "./news/index";
import Prizes from "../components/prizes";
import Heroes from "../components/heroes";
import Contacts from "../components/contacts";
import Videos from "../components/videos";

const Home: NextPage = () => {
	return (
		<div className="flex flex-col font-moncerrat ">
			<Header/>

			<div
				className="sm:px-10 flex items-center lg:bg-[url('/photo.webp')] bg-no-repeat bg-right bg-origin-border bg-contain">
				<div className="w-[calc(1180px)] mx-auto">
					<div id="content" className="lg:pt-20">
						<div id="images" className="flex items-center">
							<Image src={"/image.webp"} width={142} height={142}/>
							<Image src={"/logo.webp"} width={142} height={115}/>
						</div>

						<div className="flex flex-row justify-start w-full ">
							<div className="flex flex-col gap-12">
								<div
									className=" leading-[calc(55px)] pt-16 [&>p]:font-bold [&>p]:text-[calc(50px)] [&>p]:tracking-wider">
									<p>Расскажи историю своего</p>
									<p>Реального папы!</p>
								</div>
								<div className="text-3xl font-semibold italic">
									<p>На основе позитивных и воодушевляющих</p>
									<p>примеров помогаем российским папам </p>
									<p>стать лучшими отцами для своего ребенка.</p>
								</div>

								<div className="flex gap-5">
									<button className="w-[calc(200px)] text-white bg-my-red rounded-xl py-3">
										Категории историй
									</button>
									<button className="w-[calc(200px)] text-white bg-my-red rounded-xl py-3">
										Участвовать в конкурсе
									</button>
								</div>
							</div>

							<div className="-mx-40 sm:hidden lg:block">
								<Image src={"/pngwingcom_1.webp"} width={372} height={559}/>{" "}
							</div>
						</div>
					</div>
				</div>
			</div>

			<About/>
			<Events/>
			<Categories/>
			<Prizes/>
			<News/>
			<Heroes/>

			<div className="py-36">
				<h1 className="text-4xl text-my-red text-center font-semibold uppercase">встречи с реальными папами</h1>
			</div>
			<Videos/>
			<Contacts/>
			<Footer/>
		</div>
	);
};

export default Home;
