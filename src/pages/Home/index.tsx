import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ContentBlock2 = lazy(() => import("../../components/ContentBlock2"));

interface SocialLinkProps {
  href: string;
  src: string;
}

const Home = ({ t }: any) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="100%" />
      </a>
    );
  };
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer2.jpg"
        id="intro"
      />
      <div className="logos">
         <img src="/img/svg/logo-bscscan.svg"></img>
         <img src="/img/svg/metamask.jpg"></img>
         <img src="/img/svg/trust-wallet.svg"></img>
         <img src="/img/svg/Binance-Logo.wine.png"></img>
         <img className ="apple" src="/img/svg/apple-store.png"></img>
         <img src="/img/svg/Google-Play-Logo.png"></img>
      </div>
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
      />
      <div className="hallDiv">
         <img className="hall"src="/img/svg/hall.png"></img>
      </div>
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="heros.png"
        id="about"
      />
      <ContentBlock2
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="super-you.png"
        id="mission"
      />
    {/*   <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
