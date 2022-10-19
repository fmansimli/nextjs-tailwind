import type { NextPage } from "next";
import Head from "next/head";
import MyButton from "../components/ui/MyButton";
import MyInput from "../components/ui/MyInput";

const Home: NextPage = () => {
  return (
    <div className="selection:bg-rose-500 selection:text-white">
      <div className="min-h-screen bg-rose-100 flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
            <div className="relative h-48 bg-rose-500 rounded-bl-4xl">
              <svg
                className="absolute bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ffffff"
                  fill-opacity="1"
                  d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
              <h1 className="text-2xl font-semibold text-gray-900">
                Welcome back!
              </h1>
              <form className="mt-12 flex flex-col gap-8">
                <MyInput label="Email address" id="email" type="email" />
                <MyInput label="Username" id="username" type="text" />
                <MyInput label="Password" id="password" type="password" />

                <MyButton type="button">Sign In</MyButton>
              </form>
              <a
                href="#"
                className="mt-4 block text-sm text-center font-medium text-rose-600 hover:underline 
                  focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
