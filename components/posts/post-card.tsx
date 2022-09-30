import Image from "next/image";
import {IPostCard} from "../../models/IPostCard";

const PostCard = (params: IPostCard) => {
  return (
    <div className="flex flex-col gap-5 md:max-w-[calc(260px)]">
      <div className="flex justify-center">
        <Image alt={'/favicon.ico'} src={params.image} width={260} height={195} objectFit='cover' />
      </div>

      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <p>{params.date}</p>
        <p className="max-w-[calc(260px)]">{params.title}</p>
      </div>
    </div>
  );
};

export default PostCard;
