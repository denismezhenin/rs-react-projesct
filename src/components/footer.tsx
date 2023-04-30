import { FOOTER } from "../constants/UI";

export const Footer = () => {
  return (
    <footer id="footer_container" className="footer">
      <span className="footer-info">{FOOTER.YEAR}</span>
    </footer>
  );
};
