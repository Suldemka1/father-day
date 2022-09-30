import PostCard from "../../components/posts/post-card";
import SectionLayout from "../../layout/sectionLayout";

const News = () => {
	return (
		<SectionLayout className={'px-10'} id={'news'}>
			<div className="container mx-auto ">
				<div>
					<h1 className="text-my-red font-semibold text-[calc(40px)] text-center py-10">
						Новости и статьи
					</h1>
				</div>

				<div className="flex sm:flex-col md:flex-row flex-wrap gap-10 sm:justify-center md:justify-between">
					<PostCard
						image="/favicon.ico"
						title="В ЛДНР создали отделение 'Союза отцов'"
						date="07.06.2022"
					/>
					<PostCard
						image="/favicon.ico"
						title="В ЛДНР создали отделение 'Союза отцов'"
						date="07.06.2022"
					/>
					<PostCard
						image="/favicon.ico"
						title="В ЛДНР создали отделение 'Союза отцов'"
						date="07.06.2022"
					/>
					<PostCard
						image="/favicon.ico"
						title="В ЛДНР создали отделение 'Союза отцов'"
						date="07.06.2022"
					/>
					<PostCard
						image="/favicon.ico"
						title="В ЛДНР создали отделение 'Союза отцов'"
						date="07.06.2022"
					/>
					<PostCard
						image="/favicon.ico"
						title="В ЛДНР создали отделение 'Союза отцов'"
						date="07.06.2022"
					/>
					<PostCard
						image="/favicon.ico"
						title="В ЛДНР создали отделение 'Союза отцов'"
						date="07.06.2022"
					/>
					<PostCard
						image="/favicon.ico"
						title="В ЛДНР создали отделение 'Союза отцов'"
						date="07.06.2022"
					/>
				</div>
			</div>
		</SectionLayout>

	);
};

export default News;
