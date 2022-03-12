import React, { useState, useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const TopNav = () => {
    // const { topNav } = useContext(PortfolioContext);
    // const {}

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
          setIsDesktop(true);
          setIsMobile(false);
        } else {
          setIsMobile(true);
          setIsDesktop(false);
        }
      }, []);

    return(
      <section id="topnav">
        <nav>
          <ul class="menu">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </section>
    );
};

export default TopNav;