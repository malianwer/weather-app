import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaCodeFork, FaStar } from "react-icons/fa6";

const Footer = () => {
  const anchorStyle = {
    color: "#C6C6C6",
  };
  return (
    <>
      <footer className="footer">
        <a href="/" target="_blank" style={anchorStyle}>
          <FaGithub /> <span>GitHub</span>
        </a>
        <a href="/" target="_blank" style={anchorStyle}>
          <FaCodeFork />
          <span>Fork</span>
        </a>
        <a href="/" target="_blank" style={anchorStyle}>
          <FaStar /> <span>Star</span>
        </a>
        <a href="/" target="_blank" style={anchorStyle}>
          <FaInstagram />
          <span>Instagram</span>
        </a>
      </footer>
    </>
  );
};

export default Footer;
