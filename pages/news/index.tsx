import PostCard from "../../components/posts/post-card";

const News = () => {
  return (
    <div className="container mx-auto ">
      <div>
        <h1>Новости и статьи</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
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
  );
};

export default News;
