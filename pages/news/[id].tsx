import React from 'react';
import Head from "next/head";
import PostPage from "../../components/posts/post-page";

export const getServerSideProps = async (context: any) => {
	const {id} = context.params
	const res = await fetch(`${process.env.APIpath}/news/${id}?populate=?`)
	const post = await res.json()

	return {
		props: {post: post}
	}
}


const NewsPage = ({post}: any) => {
	return (
		<div>
			<Head>
				<title>{post.title}</title>
			</Head>

			<PostPage
				id={post.id}
				image={post.image}
				title={post.title}
				body={post.body}/>
		</div>
	);
};

export default NewsPage;