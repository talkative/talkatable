import { HtmlHTMLAttributes } from "react";
import cn from "@utils/classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface BackButton extends HtmlHTMLAttributes<HTMLDivElement> {
  onClick: () => void;
}

export const BackButton = ({ onClick, ...props }: BackButton) => {
  return (
    <div className={cn("relative")} {...props}>
      <button
        onClick={onClick}
        className={cn(
          "rounded-full border-white border text-white w-12 h-12 shadow-xl"
        )}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          rotation={180}
          style={{ color: "#FFFF" }}
        />
      </button>
    </div>
  );
};

export default BackButton;
