import { HtmlHTMLAttributes } from "react";

import cn from "@utils/classnames";

interface Button extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type: "primary" | "secondary" | "tertiary";
}

export const Button = ({ className, children, type, ...props }: Button) => {
  return (
    <button
      className={cn(
        "w-full p-4 text-white border rounded-lg mt-auto",
        className,
        {
          "bg-button-color border-none": type === "primary",
        }
      )}
      {...props}
    >
      <span className="text-2xl">{children}</span>
    </button>
  );
};

export default Button;
