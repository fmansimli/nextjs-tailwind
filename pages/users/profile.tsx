import { GetServerSidePropsContext, NextPage } from "next";

interface PageProps {
  profile: any;
}

const ProfilePage: NextPage<PageProps> = (props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <p>{JSON.stringify(props.profile, null, 2)}</p>
        <br />
      </main>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, res, params } = context;

  try {
    return { props: { profile: req.cookies } };
  } catch (error) {
    return { notFound: true };

    // return {
    //   redirect: { destination: "/error-no-user" },
    // };
  }
}

export default ProfilePage;
