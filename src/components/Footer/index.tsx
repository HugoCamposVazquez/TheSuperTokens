import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { Button } from "../../common/Button";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

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
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <p className="Footer">{t("The SuperTokens Battle is a product of TheFLasDefi.com")}</p>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
          <div className="logosFooter">
            <img src="/img/svg/logo-bscscan.svg"></img>
            <img src="/img/svg/metamask.jpg"></img>
            <img src="/img/svg/trust-wallet.svg"></img>
            <img src="/img/svg/Binance-Logo.wine.png"></img>
            <img className ="apple" src="/img/svg/apple-store.png"></img>
            <img src="/img/svg/Google-Play-Logo.png"></img>
          </div>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="201px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://t.me/flashtokengroup"
                src="telegram.png"
              />
              <SocialLink
                href="https://twitter.com/flashswap1"
                src="twitter.png"
              />
              <SocialLink
                href="https://app.theflashdefi.com"
                src="web.png"
              />
              <SocialLink
                href="https://flashswaptoken.gitbook.io/flashswap/"
                src="gitbook.png"
              />
 <Button><a className="getFlashT" href="https://dex.theflashdefi.com/#/swap?outputCurrency=0x2656049f068C7389fcD0E15bB4b53bCE3A29c0B1">{t("🔥GET TFLASH🔥")}</a></Button>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
