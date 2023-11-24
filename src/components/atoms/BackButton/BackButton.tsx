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
          "rounded-full bg-button-color text-white w-20 h-20 top-4 left-4 shadow-xl"
        )}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          rotation={180}
          size="2xl"
          style={{ color: "#FFFF" }}
        />
      </button>
    </div>
  );
};

export default BackButton;
