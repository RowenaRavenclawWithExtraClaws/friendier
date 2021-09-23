import { ButtonProps } from "../utility/types";

const CustomButton = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className={`btn ${props.styleClass}`}
      onClick={props.handler}
    >
      {props.text}
    </button>
  );
};

export default CustomButton;
