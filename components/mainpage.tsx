import Image from "next/image";

import React from 'react';

const Mainpage = () => {
	return (
		<div
			className="sm:px-10 flex items-center lg:bg-[url('/photo.webp')] bg-no-repeat bg-right bg-origin-border bg-contain">
			<div className="w-[calc(1180px)] mx-auto">
				<div id="content" className="lg:pt-20">
					<div id="images" className="flex items-center gap-5">
						<Image alt={'Tuvsu_logo 2.png'} src={"/Tuvsu_logo 2.png"} width={142} height={142}/>
						<div className={'flex flex-col text-3xl font-bold'}>
							<h1 className={''}>При поддержке Тувинского</h1>
							<h1>государственного университета</h1>
						</div>

						{/*<Image src={"/logo.webp"} width={142} height={115}/>*/}
					</div>

					<div className="flex flex-row justify-start w-fit ">
						<div className="flex flex-col gap-12 w-fit">
							<div
								className=" leading-[calc(55px)] pt-16 [&>p]:font-bold sm:[&>p]:text-[calc(40px)] md:[&>p]:text-[calc(50px)] [&>p]:tracking-wider">
								<p>Расскажи историю своего</p>
								<p>Реального папы!</p>
							</div>
							<div className="sm:text-xl md:text-3xl font-semibold italic">
								<p>На основе позитивных и воодушевляющих</p>
								<p>примеров помогаем российским папам </p>
								<p>стать лучшими отцами для своего ребенка.</p>
							</div>

							<div className="flex sm:flex-col md:flex-wrap gap-5 w-fit">
								<button className="w-fit text-white bg-my-red rounded-xl px-4 py-3">
									Категории историй
								</button>
								<button className="w-fit text-white bg-my-red rounded-xl px-4 py-3">
									Участвовать в конкурсе
								</button>
							</div>
						</div>

						<div className="-mx-6 -my-1.5 sm:hidden md:hidden lg:block">
							<Image alt={'Tuvsu_logo 2.png'} src={"/forFatherDay.png"} width={300} height={600}/>{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mainpage;
