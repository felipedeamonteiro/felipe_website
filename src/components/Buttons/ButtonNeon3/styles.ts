import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    position: relative;
    width: 100%;
    height: 60px;
    display: inline-block;
    background: #fff;
    margin-top: 20px;

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      background: ${props => props.theme.colors.navbarBackground};
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2em;
      font-family: 'Orbitron', sans-serif;
      text-transform: uppercase;
      color: #fff;
      border: 1px, solid #040a29;
      overflow: hidden;
    }

    span::before {
      content: "";
      position: absolute;
      top: 0;
      left: -50%;
      width: 100%;
      height: 100%;
      background: rgba(255,255,255,0.075);
      transform: skew(25deg);
    }
  }

  a:before,
  a:after {
    content: "";
    position: absolute;
    inset: 0;
    background: #f00;
    transition: 0.5s;
  }

  a:hover:before {
    inset: -3px;
  }

  a:hover:after {
    inset: -3px;
    filter: blur(10px);
  }

  a:nth-child(1):before,
  a:nth-child(1):after {
    background: linear-gradient(45deg, #00ccff, #0e1538, #d400d4);
  }
`;

