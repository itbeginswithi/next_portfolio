import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import {Link as ScrollLink } from 'react-scroll'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display: 'flex', alignItems: 'center', color: 'white'}}>
          <DiCssdeck size="3rem" /><span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <ScrollLink to="#projects" spy={true} smooth={true} offset={-50} duration={500}>
          <NavLink>Projects</NavLink>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="#tech" spy={true} smooth={true} offset={-50} duration={500}>
          <NavLink>Technologies</NavLink>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="#about" spy={true} smooth={true} offset={-50} duration={500}>
          <NavLink>About</NavLink>
        </ScrollLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/"
    </Div3>
  </Container>
);

export default Header;
