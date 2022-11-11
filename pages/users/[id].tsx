import { GetServerSidePropsContext, NextPage } from "next";

interface PageProps {
  userId: string;
}

const UserDetailPage: NextPage<PageProps> = (props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h4 className="text-6xl font-bold">{props.userId}</h4>
        <br />
      </main>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userId = context.params!.id;

  try {
    return { props: { userId: "user " + userId } };
  } catch (error) {
    return { notFound: true };

    // return {
    //   redirect: { destination: "/error-no-user" },
    // };
  }
}

export default UserDetailPage;
