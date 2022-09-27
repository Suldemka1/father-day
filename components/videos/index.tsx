import React from 'react';
import VideoCard from "./video-card";

const Videos = () => {
	return (
		<div className={'container mx-auto'}>
			<div className={'flex flex-row justify-between flex-wrap gap-5'}>
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