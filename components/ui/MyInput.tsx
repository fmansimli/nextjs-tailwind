import { FC, InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<any> {
  label?: string;
}

const MyInput: FC<IInput> = ({ label, ...props }) => {
  return (
    <div className="relative">
      <input
        {...props}
        className="peer border-0 pl-0 h-10 w-full border-b-2 border-gray-300 text-gray-900
                 placeholder-transparent focus:outline-none focus:border-rose-600 focus:ring-0"
        placeholder={label}
      />
      <label
        htmlFor={props.id}
        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all 
         peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
         peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};

export default MyInput;
