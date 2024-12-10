import { forwardRef } from "react";
import { UIInterface } from "../../typescript";

interface ButtonInterface extends UIInterface {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonInterface>(
  ({ children, ...props }: ButtonInterface, ref) => {
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
