import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image,title, description, }))}
    </GridContainer>
  </Section>
);

export default Projects;