import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const NeonButtonReal: React.FC<ButtonProps> = () => {
  return (
    <Container>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Button
      </a>
    </Container>
  );
};

export default NeonButtonReal;
