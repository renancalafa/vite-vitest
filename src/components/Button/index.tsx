import type { FC, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled = false }) => {
  return (
    <button disabled={disabled} onClick={onClick}>{children}</button>
  );
}

export default Button;
