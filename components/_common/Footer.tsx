import { FC } from "react";
import Image from "next/image";

interface IFooter {
  //
}

const Footer: FC<IFooter> = (props) => {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t-2">
      <a
        className="flex items-center justify-center gap-2"
        href="#p"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </a>
    </footer>
  );
};

export default Footer;
