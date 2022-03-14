import React, { useState, useEffect } from 'react';
import TopNav from './TopNav/TopNav';
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { topNavData, heroData, aboutData, experienceData, projectsData, contactData } from '../mock/data';

function App() {
  const [topNav, setTopNav] = useState({})
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [experience, setExperience] = useState([])
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    setTopNav({ ...topNavData })
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setExperience([...experienceData]);
    setProjects([...projectsData]);
    setContact({ ...contactData });
  }, []);

  return (
    <PortfolioProvider value={{ topNav, hero, about, experience, projects, contact }}>
      <TopNav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
