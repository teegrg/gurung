import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import "../style/footer.css";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__text">
      <ScrollLink to="home" smooth={true} offset={-50}>
          <div className="footer__home">Home</div>
        </ScrollLink>
        <ScrollLink to="about" smooth={true} offset={-50}> 
          <div className="footer__about">About</div>
        </ScrollLink>
        {/* <Link to="/work" ><div>Work</div></Link> */}
        <a href="mailto: teegurung@gmail.com"><div className="footer__contact">Contact</div></a>
      </div>
      <div className="footer__icon">
        <a href="https://www.linkedin.com/in/tsheringgurungny/" target="_blank" ><LinkedInIcon/></a>
        <a href="https://github.com/teegrg" target="_blank" ><GitHubIcon/></a>
        <a href="mailto: teegurung@gmail.com"><MailOutlineIcon/></a>
      </div>
    </div>
  );
}

export default Footer;
