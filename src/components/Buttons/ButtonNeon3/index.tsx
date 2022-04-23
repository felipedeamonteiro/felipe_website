import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonNeon1: React.FC<ButtonProps> = () => {
  return (
    <Container>
      <a href="#">
        <span>Button</span>
      </a>
    </Container>
  );
};

export default ButtonNeon1;
