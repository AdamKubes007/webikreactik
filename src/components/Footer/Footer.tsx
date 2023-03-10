import '../../App.css';
import ikonaFB from "../../assets/images/logos/ikona-fb.jpg";
import ikonaIG from "../../assets/images/logos/ikona-ig.jpg";

function Footer() {
  return (
    <footer>
      <p>©STUDENTSKÁ UNIE UTB, 2022</p>
      <div className="contact-links">
        <a className="mail-link" href="mailto:su@utb.cz">su@utb.cz</a>
        <div className="socials">
          <a
            href="https://www.facebook.com/studentskaunieutb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ikonaFB} alt="fb ikona" />
          </a>
          <a
            href="https://www.instagram.com/studentskaunieutb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ikonaIG} alt="ig ikona" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;