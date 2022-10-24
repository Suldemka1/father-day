import type {NextPage} from "next";
import About from "../components/about";
import Categories from "../components/categories";
import Index from "../components/events";
import Footer from "../components/footer";
import Header from "../components/header";
import News from "./news/index";
import Prizes from "../components/prizes";
import Heroes from "../components/heroes";
import Contacts from "../components/contacts";
import Videos from "../components/videos";
import Mainpage from "../components/mainpage";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div className="flex flex-col font-moncerrat ">
			{/* eslint-disable-next-line react/jsx-no-undef */}
			<Head>
				<title>Конкурс ко дню отца</title>
				<link rel="shortcut icon" href="/Tuvsu_logo 2.png" />
			</Head>
			<Header/>
			<Mainpage />
			<About/>
			<Index/>
			<Categories/>
			<Prizes/>
			<News/>
			<Heroes/>
			<Videos/>
			<Contacts/>
			<Footer/>
		</div>
	);
};

export default Home;
