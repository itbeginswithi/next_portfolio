import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import {Link as ScrollLink } from 'react-scroll'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: "20px"}}>
          <DiCssdeck size="3rem" /><Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <ScrollLink to="projects" spy={true} smooth={true} offset={-50} duration={500}>
          <NavLink>Projects</NavLink>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="tech" spy={true} smooth={true} offset={-50} duration={500}>
          <NavLink>Technologies</NavLink>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="about" spy={true} smooth={true} offset={-50} duration={500}>
          <NavLink>About</NavLink>
        </ScrollLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons target="_blank" href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons target="_blank" href="https://instagram.com/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
