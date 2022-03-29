import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit   
      </SectionText>
      <Button onClick={() => window.location = 'www.google.com')}
    </LeftSection>
  </Section>
);

export default Hero;