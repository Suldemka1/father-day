import SectionLayout from "../../layout/sectionLayout";
import EventCard from "./Event-Card";

const Events = () => {
	return (
		<SectionLayout className={'bg-gray py-16'} id={'events'}>
			<div className="container mx-auto flex sm:flex-col md:flex-row justify-between items-center gap-10">
				<EventCard/>
				<EventCard/>
				<EventCard/>
			</div>
		</SectionLayout>

	);
};

export default Events;
