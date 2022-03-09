import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';
import DevPostIcon from '../../images/svg/devpost.svg';
import GitHubIcon from '../../images/svg/github.svg';
import LinkedInIcon from '../../images/svg/linkedin2.svg';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/chi-ming-yip-318164191/" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/chimingyip" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn">
              <GitHubIcon />
            </a>
            <a href="https://devpost.com/chimingyip" rel="noopener noreferrer" target="_blank" aria-label="DevPost">
              <DevPostIcon />
            </a>
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Chi Ming Yip
        </p>

        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
