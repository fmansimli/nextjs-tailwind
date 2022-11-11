import { GetStaticPropsContext, type NextPage } from "next";
import Head from "next/head";
import { http } from "../../http/http";

interface PageProps {
  post: any;
}

const PostDetailPage: NextPage<PageProps> = (props) => {
  if (!props.post) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <hr />
        <div className="w-full m-10 border-red-700 border p-5">
          <h4 className="text-6xl font-bold mb-5">
            {props.post.attributes.title}
          </h4>
          <p>{props.post.attributes.body}</p>
        </div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  try {
    const { data } = await http.get("/posts?fields=id");
    const paths = data.data.map((post: any) => ({
      params: { pid: String(post.id) },
    }));

    return {
      paths,
      fallback: true, // "blocking"
    };
  } catch (error) {
    console.error("getStaticPaths", error);
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const pid = Number(context.params!.pid);
  try {
    const { data } = await http.get(`/posts/${pid}`);

    if (!data) {
      throw new Error("post by given id Not Found!");
    }

    return {
      props: {
        post: data.data,
      },
    };
  } catch (error) {
    return { notFound: true };

    // return {
    //   redirect: { destination: "/error-no-data" },
    // };
  }
}

export default PostDetailPage;
