import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
        id="intros"
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
      <div id="timeline">
        <h2 className="text-center">The #RoadTotheMoonMap</h2>
      <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="30-02-2021"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff'}}
           // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Brainstorming & Hits</h3>
            <h4 className="vertical-timeline-element-subtitle done">Done</h4>
            <p>
            After a lot of wandering and a few coffees, and 3 fights, we arrived at the safe harbor.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="1-03-2021"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
         //   icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Concept design</h3>
            <h4 className="vertical-timeline-element-subtitle done">Done</h4>
            <p>
            This part was simple, we have a great team and everyone was aligned.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="15-03-2021"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff'}}
          //  icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Front design</h3>
            <h4 className="vertical-timeline-element-subtitle done">Done</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="10-04-2021"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff'}}
           // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Smart contract creation</h3>
            <h4 className="vertical-timeline-element-subtitle done">Done</h4>
            <p>
            Creation of the smart contracts of the first supertoken
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="18-06-2021"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff'}}
           // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Security checks</h3>
            <h4 className="vertical-timeline-element-subtitle done">Done</h4>
            <p>
            Let's avoid letting the bad guys work.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="23-06-2021"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff'}}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Front implementation with smart contracts</h3>
            <h4 className="vertical-timeline-element-subtitle done">Done</h4>
            <p>
            Well that ..
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="30-08-2021"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Launch of the first Yield Farming</h3>
            <h4 className="vertical-timeline-element-subtitle doing">Doing</h4>
            <p>
            We will launch the first yield farming associated with the first supertoken of the combat series
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="30-09-2021"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Creation of the 2nd super token</h3>
            <h4 className="vertical-timeline-element-subtitle doing">Doing</h4>
            <p>
            The one in charge of fighting with our first super token, is just finishing his training preseason.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="30-10-2021"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Launch of the second Yield Farming</h3>
            <h4 className="vertical-timeline-element-subtitle doing">Doing</h4>
            <p>
            Now is the time to start the first battle!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="30-09-2021"
            iconStyle={{ background: 'rgb(0, 148, 255)', color: '#fff' }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">More surprises to coming</h3>
            <h4 className="vertical-timeline-element-subtitle ToDo">To do</h4>
            <p>
           ...
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Container>
  );
};

export default Home;
