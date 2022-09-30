import SectionLayout from "../../layout/sectionLayout";
import HeroCard from "./hero-card";
import Pagename from "../pagename";

const Heroes = () => {
	return (
		<SectionLayout id={'heroes'} className="container mx-auto">
			<Pagename title={`Герои программы "РЕАЛЬНЫЙ ПАПА" `}/>

			<div className="flex sm:flex-col md:flex-row md:justify-between items-center gap-10 flex-wrap">
				<HeroCard title="Фамилия Имя Отчество" position="Должность на 55 символов или больше"
						  image="/noroot.png"/>
				<HeroCard title="Фамилия Имя Отчество" position="Должность на 55 символов или больше"
						  image="/noroot.png"/>
				<HeroCard title="Фамилия Имя Отчество" position="Должность на 55 символов или больше"
						  image="/noroot.png"/>
				<HeroCard title="Фамилия Имя Отчество" position="Должность на 55 символов или больше"
						  image="/noroot.png"/>
			</div>
		</SectionLayout>
	);
};

export default Heroes;
