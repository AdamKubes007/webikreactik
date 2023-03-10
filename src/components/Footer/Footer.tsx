import '../../App.css';
import ikonaFB from "../../assets/images/logos/ikona-fb.jpg";
import ikonaIG from "../../assets/images/logos/ikona-ig.jpg";
import { FooterContactLinks, FooterMainLink, FooterSocialImg, FooterSocialLink, FooterStyle } from './Footer.styled';

function Footer() {
  return (
    <FooterStyle>
      <p>©STUDENTSKÁ UNIE UTB, 2022</p>
      <FooterContactLinks>
        <FooterMainLink>su@utb.cz</FooterMainLink>
        <div>
          <FooterSocialLink
            href="https://www.facebook.com/studentskaunieutb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FooterSocialImg src={ikonaFB} alt="fb ikona" />
          </FooterSocialLink>
          <FooterSocialLink
            href="https://www.instagram.com/studentskaunieutb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FooterSocialImg src={ikonaIG} alt="ig ikona" />
          </FooterSocialLink>
        </div>
      </FooterContactLinks>
    </FooterStyle>
  );
}
export default Footer;