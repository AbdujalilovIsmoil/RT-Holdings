import { forwardRef } from "react";
import { ButtonInterface } from "./button.d";

const Button = forwardRef<HTMLButtonElement, ButtonInterface>(
  ({ children, ...props }: ButtonInterface, ref) => {
    return (
      <button
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
