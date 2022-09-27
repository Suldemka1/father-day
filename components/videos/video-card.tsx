import React from 'react';
import {IVideo} from "../../models/IVideo";

const VideoCard = (params: IVideo) => {
	return (
		<div className={'flex flex-col gap-3 w-5/12 py-10'}>

			<video controls={true}>
				<source src={params.video} type={'video/mp4'}/>
			</video>

			<div>
				<p className={'text-2xl font-light text-center'}>{params.title}</p>
			</div>
		</div>
	);
};

export default VideoCard;