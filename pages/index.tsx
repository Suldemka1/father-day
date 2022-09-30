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

const Home: NextPage = () => {
	return (
		<div className="flex flex-col font-moncerrat ">
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
