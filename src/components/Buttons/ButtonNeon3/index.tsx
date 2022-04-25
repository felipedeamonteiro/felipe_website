import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonNeon1: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Container>
      <a href={""}>
        <span>{children}</span>
      </a>
    </Container>
  );
};

export default ButtonNeon1;
