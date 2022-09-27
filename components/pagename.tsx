import React from 'react';
import {IPagename} from "../models/IPagename";

const Pagename = (params: IPagename) => {
	return (
		<h1 className={'text-4xl text-my-red text-center font-semibold py-10'}>{params.title}</h1>
	);
};

export default Pagename;