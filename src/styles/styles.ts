import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #1e2432;
        overflow-x: hidden;
    }

    a:hover {
        color: #be1b1f;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #FFF;
        font-size: 44px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #ffe745;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    

    .getFlashT {    
        color: white;
        font-weight: 900;
        letter-spacing: 1px;    
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 40px;
        &:hover {
          // box-shadow: 0 0 20px 10px rgba(230, 30, 10, 0.6);
          animation: burn 1000ms ease-out forwards;
          background: transparent!important;
          
          &::before {
            content: '';
            position: absolute;
            left: 40px;
            top: 20px;
            width: 100px;
            height: 40px;
            background: rgba(255, 230, 110, 1);
            border-radius: 100%;
            animation: flare 1000ms ease-out forwards;
          }
      
          &::after {
            content: '';
            position: absolute;
            right: 40px;
            width: 100px;
            height: 40px;
            background: rgba(255, 230, 110, 1);
            border-radius: 100%;
            animation: flare 1000ms ease-out forwards;
          }
        }
      }
      
      @keyframes flare {
        100% {
          transform: translateY(-20px) scale(1.5);
          filter: blur(10px);
          opacity: 0;
        }
      }
      
      @keyframes burn {
        0% {
          color: rgba(255, 130, 110, 1);
          background: rgba(255, 230, 110, 1);
          box-shadow:
            0 0 5px 0 rgba(200, 0, 10, 1),
            0 0 5px 0 rgba(230, 30, 10, 0.8),
            0 0 5px 0 rgba(230, 230, 10, 0.6);
        }
        
        100% {
          color: rgba(0, 0, 0, 1);
          background: rgba(255, 255, 255, 1);
          box-shadow:
            0 -35px 40px 30px rgba(255, 130, 10, 0),
            0 -30px 30px 10px rgba(230, 30, 10, 0),
            0 -20px 10px 0 rgba(255, 255, 10, 0);
        }
      }
    }
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
    .logos {
        text-align: center;
        background: #ffffff;
        padding: 0px 0;
    }
    .logos img {
        max-width: 140px;
        margin-right: 15px;
    }
    .logosFooter {
        text-align: left;
        background: #ffffff;
        padding: 0px 0;
        margin-top: 25px;
    }
    .logosFooter img {
        max-width: 140px;
        margin-right: 15px;
    }
    a.getFlash {
        color: white;
        font-weight: 900;
        letter-spacing: 1px;
    }
    img.apple {
        max-width: 99px;
    }
    .social-footer{
        height: 100%;      
    }
    
    .hall{max-width: 750px;margin:0 auto;}
    .hallDiv{text-align: center;}
    h3 {
        font-size: 19px;
        line-height: 27px;
    }
    h4{font-size: 17px;font-weight: 300px}
    h4.vertical-timeline-element-subtitle.doing {
        color: #e91d62;
    }
    p.Footer {
        color: black;
        font-size: 17px;
    }
    .ToDo{color:#0094ff}
    .vertical-timeline-element-content {
        position: relative;
        margin-left: 60px;
        background: #fff0!important;
        border-radius: 0px;
        padding: 1em;
        -webkit-box-shadow: 0 3px 0 #ddd;
        box-shadow: 0 3px 0 #ddd;
        border: 1px solid white!important;
    }
    h4.vertical-timeline-element-subtitle.done {
        color: #0ae40a;
    }
    .text-center{text-align:center;}
    @media (min-width: 767px){
    .vertical-timeline--two-columns .vertical-timeline-element-icon {
        width: 38px!important;
        height: 38px!important;
        left: 51%!important;
        margin-left: -30px;
        top: 6%!important;
    }}
`;
