import Image from "next/image";

interface IPost {
  title: string;
  date: string;
  image: string;
}

const PostCard = (params: IPost) => {
  return (
    <div className="flex flex-col gap-5 max-w-[calc(260)]">
      <div className="flex justify-center">
        <Image src={params.image} width={260} height={195} objectFit='cover' />
      </div>

      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <p>{params.date}</p>
        <p className="max-w-[calc(260px)]">{params.title}</p>
      </div>
    </div>
  );
};

export default PostCard;
