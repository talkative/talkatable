import { HtmlHTMLAttributes } from "react";

import cn from "@utils/classnames";

interface Button extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ className, children, ...props }: Button) => {
  return (
    <button
      className={cn(
        "w-full p-4 text-white bg-button-color rounded-lg shadow-xl",
        className
      )}
      {...props}
    >
      <span className="text-3xl font-bold font-abc">{children}</span>
    </button>
  );
};

export default Button;
