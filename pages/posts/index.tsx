import type { NextPage, GetStaticPropsContext } from "next";
import { useEffect, useState } from "react";

import Link from "next/link";
import Head from "next/head";
import { http } from "../../http/http";

interface PageProps {
  posts: any[];
  meta: Object;
  error?: string;
}

const PostsPage: NextPage<PageProps> = (props) => {
  const [posts, setPosts] = useState(props.posts);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await http.get("/posts");
        setPosts(data.data);
      } catch (error) {
        alert(JSON.stringify(error, null, 2));
      }
    })();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {posts.map((post, key) => (
          <div className="w-full m-10 border-red-700 border p-5" key={key}>
            <Link href={`/posts/${post.id}`}>
              <span className="text-2xl font-bold">
                {post.attributes.title}
              </span>
            </Link>
            <p>{post.attributes.body}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const { data } = await http("/posts");

    if (!data) {
      throw new Error("Post List Not Found!");
    }

    return {
      props: {
        posts: data.data,
        meta: data.meta,
      },
      revalidate: 600,
    };
  } catch (error: any) {
    return { notFound: true };

    // return {
    //   redirect: { destination: "/error-no-data" },
    // };
  }
}

export default PostsPage;
