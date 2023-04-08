import { FOOTER } from "../constants/UI";

const Footer = () => {
  return (
    <div id="footer_container" className="footer">
      <span className="footer-info">{FOOTER.YEAR}</span>
    </div>
  );
};

export default Footer;
