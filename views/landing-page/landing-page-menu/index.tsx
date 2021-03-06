import { FC, useState } from 'react';
import BurggerMenu from '../../../components/burgger-menu';

import {
  MenuContainer,
  Ul,
  Li,
  TogleNavbarButton,
  Navbar,
  NavbarWrapper,
  Logo
} from './landing-page-menu.styles'

const LandingPageMenu: FC = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const togleNavbar = () => {
    setNavbarIsOpen(!navbarIsOpen)
  };

  return(
    <MenuContainer>
      <Logo>JT-Extreme</Logo>
      <TogleNavbarButton onClick={() => togleNavbar()}>
        <BurggerMenu changeShape={!navbarIsOpen} />
      </TogleNavbarButton>

        <Navbar isOpen={navbarIsOpen}>
          <Ul>
            <Li data-text="Home">Home</Li>
            <Li data-text="Mition">Mition</Li>
            <Li data-text="About">About</Li>
            <Li data-text="Contact">Contact</Li>
          </Ul>
        </Navbar>

    </MenuContainer>
  )
}
export default LandingPageMenu;
