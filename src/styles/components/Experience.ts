import styled from 'styled-components';
import { desktopScreenMin, mobileScreenMax, tabletScreenMax } from '../helperScreens';

export const Container = styled.section`
  background: #d7d8fc;
  width: 100%;
  height: 3250px;
  padding: 100px 30px 30px 30px;

  @media only screen and (max-width: ${mobileScreenMax}) {
    width: 100%;
    height: 4550px;
    padding: 80px 20px 20px 20px;
    overflow-x: hidden;
    overflow-y: hidden;

    @media only screen and (max-height: 812px) {
      height: 4850px;
    }
  }

  @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
    width: 100%;
    height: 4050px;
    padding: 80px 20px 20px 20px;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .text-center-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .text-uppercase {
      margin-top: 60px;
      font-size: 45px;
      font-family: 'Orbitron', sans-serif;

      @media only screen and (max-width: ${mobileScreenMax}) {
        margin-top: 40px;
        text-align: center;
      }

      @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
        margin-top: 40px;
        text-align: center;
      }
    }

    .text-muted {
      margin: 25px 0 50px 0;
      font-style: italic;
      font-weight: lighter;
      color: #676e75;
    }
  }

  .timeline {
  position: relative;
  padding: 0;
  list-style: none;
  &:before {
    position: absolute;
    top: 0;
    bottom: 85px;
    left: 50%;
    width: 3px;
    margin-left: -1.5px;
    content: '';
    background-color: #00d0e5;

    @media only screen and (max-width: ${mobileScreenMax}) {
      left: 20%;
      bottom: 400px;
    }

    @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
      left: 21%;
      bottom: 110px;
    }
  }
  > li {
    position: relative;
    min-height: 170px;
    margin: 100px 0;
    
    &:after,
    &:before {
      display: table;
      content: ' ';
    }
    &:after {
      clear: both;
    }
    .timeline-panel {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 43%;
      padding: 10px 20px 20px 14px;
      text-align: right;

      @media only screen and (max-width: ${mobileScreenMax}) {
        text-align: left;
        float: none;
        left: 37%;
        width: 65%;
      }

      @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
        text-align: left;
        float: none;
        left: 33%;
        width: 70%;
      }

      &:before {
        right: auto;
        left: -15px;
        border-right-width: 15px;
        border-left-width: 0;
      }
      &:after {
        right: auto;
        left: -14px;
        border-right-width: 14px;
        border-left-width: 0;
      }
    }
    .timeline-image {
      position: absolute;
      z-index: 100;
      left: 50%;
      width: 170px;
      height: 170px;
      margin-left: -85px;
      text-align: center;
      color: white;
      border: 9px solid gray;
      border-radius: 100%;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border-color .5s;

      @media only screen and (max-width: ${mobileScreenMax}) {
        width: 130px;
        height: 130px;
        left: 25%;
      }

      @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
        width: 150px;
        height: 150px;
        left: 22%;
      }

      &.circleActive {
        border: 9px solid #00d0e5;
        transition: border-color .5s;
      }
      
      img {
        border-radius: 100%;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: -1;
      }

      h4 {
        margin-top: 40px;
      }

      &:last-child {
        background-color: #00d0e5;
      }
    }

    &.timeline-inverted > .timeline-panel {
      display: flex;
      justify-content: flex-end;
      padding: 0 30px 20px 20px;
      text-align: left;
      float: right;

      @media only screen and (max-width: ${mobileScreenMax}) {
        text-align: left;
        float: none;
        left: 37%;
        width: 65%;
        font-size: 18px;
      }

      @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
        float: none;
        left: 33%;
        width: 70%;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  .timeline-heading {
    h4 {
      font-size: 25px;
      margin-top: 0;
      color: inherit;

      @media only screen and (max-width: ${mobileScreenMax}) {
        font-size: 20px;
      }

      &.subheading {
        text-transform: none;
      }
    }
  }
  .timeline-body {
     > ul,
    > p {
      margin-bottom: 0;
      font-size: 20px;
      color: #6c757d;
      transition: color .5s;

      @media only screen and (max-width: ${mobileScreenMax}) {
        font-size: 18px;
      }

      &.activeText {
        color: #13b5c5;
        transition: color .5s;
      }
    }
  }
  
}

/* @media only screen and (max-width: ${mobileScreenMax}) {
  width: 100%;
}

@media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
  width: 122%;
} */

/* @media only screen and (min-width:992px) {
  .timeline {
    > li {
      min-height: 150px;
      .timeline-panel {
        padding: 0 20px 20px;
      }
      .timeline-image {
        width: 150px;
        height: 150px;
        margin-left: -75px;
        h4 {
          font-size: 18px;
          line-height: 26px;
          margin-top: 30px;
        }
      }
      &.timeline-inverted > .timeline-panel {
        padding: 0 20px 20px;
      }
    }
  }
} */

/* @media only screen and (min-width: ${desktopScreenMin}) {
  .timeline {
    > li {
      min-height: 170px;
      .timeline-panel {
        padding: 36px 20px 20px 14px;
      }
      .timeline-image {
        width: 170px;
        height: 170px;
        margin-left: -85px;
        h4 {
          margin-top: 40px;
        }
      }
      &.timeline-inverted > .timeline-panel {
        padding: 30px 5px 20px 20px;
      }
    }
  }
} */

/* @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
  width: 401%;
  height: 3370px;

  .timeline {
    position: relative;
    width: 80%;

    &:before {
      left: 50%;
    }
    > li {
      width: 375px;
      min-height: 100px;
      margin-bottom: 100px;
      .timeline-panel {
        float: left;
        width: 41%;
        padding: 0 20px 20px 30px;
        text-align: right;
      }
      .timeline-image {
        left: 50%;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        h4 {
          font-size: 13px;
          line-height: 18px;
          margin-top: 16px;
        }
      }
      &.timeline-inverted > .timeline-panel {
        float: right;
        padding: 0 30px 20px 20px;
        text-align: left;
      }
    }
  }
} */
`;