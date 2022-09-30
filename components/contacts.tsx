import React from 'react';
import Image from "next/image";

const Contacts = () => {
	return (
		<div className="container mx-auto w-full flex flex-col gap-5 border-b py-10">
			<h1 className={'text-4xl text-my-red text-center font-semibold '}>Как с нами связаться</h1>

			<h3 className={'text-2xl text-center font-semibold'}>someemail@mail.ru</h3>
			<div id={'social-media'} className={'flex items-center justify-center gap-5'}>
				<Image alt={'Tuvsu_logo 2.png'} src={'/vk_logo.png'} width={40} height={40}/>
			</div>
		</div>
	);
}

export default Contacts;