import React from "react";

interface ButtonProps {
  children: React.ReactNode | undefined,
  type: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = React.forwardRef(
  (
    {
      children,
      type = "button",
      onClick,
    } : ButtonProps,
    ref: React.Ref<HTMLButtonElement | null>
  ) => {
   

    const handleClick = (e) => {
      onClick(e);
    };

    return (
      <button
        type={type}
        onClick={handleClick}
        ref={ref}
      >
        { children }
      </button>
    );
  }
);

export default Button;
