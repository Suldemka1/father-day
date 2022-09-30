import React from 'react';
import VideoCard from "./video-card";

const Videos = () => {
	return (
		<div className={'container mx-auto'}>
			<div className="py-36">
				<h1 className="text-4xl text-my-red text-center font-semibold uppercase">встречи с реальными папами</h1>
			</div>
			<div className={'flex sm:flex-col md:flex-row sm:justify-center md:justify-between items-center flex-wrap gap-5'}>
				<VideoCard title={'Фамилия Имя'} video={'/videos.mp4'}/>
				<VideoCard title={'Фамилия Имя'} video={'/videos.mp4'}/>
				<VideoCard title={'Фамилия Имя'} video={'/videos.mp4'}/>
				<VideoCard title={'Фамилия Имя'} video={'/videos.mp4'}/>
				<VideoCard title={'Фамилия Имя'} video={'/videos.mp4'}/>
				<VideoCard title={'Фамилия Имя'} video={'/videos.mp4'}/>
				<VideoCard title={'Фамилия Имя'} video={'/videos.mp4'}/>
				<VideoCard title={'Фамилия Имя'} video={'/videos.mp4'}/>
			</div>

		</div>
	);
};

export default Videos;