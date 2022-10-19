import { ButtonHTMLAttributes, FC } from "react";

interface IButton extends ButtonHTMLAttributes<any> {
  children: any;
}

const MyButton: FC<IButton> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="mt-20 px-4 py-2 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold 
             text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500
             focus:ring-opacity-80 cursor-pointer"
    >
      {children}
    </button>
  );
};

export default MyButton;
