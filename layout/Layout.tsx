import { FC } from "react";
import Navbar from "../components/_common/Navbar";
import Footer from "../components/_common/Footer";

interface ILayout {
  children: any;
}

const Layout: FC<ILayout> = (props) => {
  return (
    <div>
      <Navbar />
      <main className="">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
