import {IPostPage} from "../../models/IPostPage";
import Head from "next/head";
import Image from "next/image";

const PostPage = ({id, title, image, body}: IPostPage) =>
	<div>
		<Head>
			<title>
				{title}
			</title>
		</Head>

		<div>
			<h1>{title}</h1>
			<Image src={image} width={350} height={350}/>

            <div>
                <p>
                    {body}
                </p>
            </div>
		</div>
	</div>


export default PostPage;
