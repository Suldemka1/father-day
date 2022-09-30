import React from 'react';
import Image from "next/image";

const EventCard = () => {
	return (
		<div className="sm:w-10/12 md:w-2/6 flex flex-col items-center gap-5">
			<Image
				alt={'/favicon.ico'}
				src={"/fuck.webp"}
				width={200}
				height={200}
				className="rounded-full"
			/>
			<div>
				<p className="text-2xl font-semibold px-5 text-left">
					В рамках проекта к 9 мая планируется акция «Песни наших отцов».
					Семьями поём песни Победы, выкладываем видео в соцсетях.
				</p>
			</div>
		</div>
	);
};

export default EventCard;