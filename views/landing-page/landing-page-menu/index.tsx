import { FC } from 'react';

import { MenuContainer, Ul, Li } from './landing-page-menu.styles'

const LandingPageMenu: FC = () => (
  <MenuContainer>
    <Ul>
      <Li data-text="Home">Home</Li>
      <Li data-text="Mition">Mition</Li>
      <Li data-text="About">About</Li>
      <Li data-text="Contact">Contact</Li>
    </Ul>
  </MenuContainer>
)

export default LandingPageMenu;
