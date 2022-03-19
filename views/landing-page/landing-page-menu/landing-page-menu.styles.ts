import styled from 'styled-components';
import { DEFUALT_COLORS } from '../../../config/themes/default-colors';

export const MenuContainer = styled.nav`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 200;

  background-color: ${DEFUALT_COLORS.white01};
`

export const Logo = styled.h1`
  font-size: 34px;
  font-weight: 900;
  color: ${DEFUALT_COLORS.black01};
  margin-left: 15%;
`

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  right: 0;
  top: 0;

  background: transparent;
  overflow: hidden;
  z-index: -1;
`;

export const Navbar = styled.nav<{ isOpen: boolean}>`
  width: 100%;
  height: 100% !important;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${DEFUALT_COLORS.black01};
  overflow: hidden;

  transition: all 0.5s ease;
  transform: ${({ isOpen }) => isOpen ? 'translateX(100%)' : 'translateX(0)'};

`

export const TogleNavbarButton = styled.button`
  width: 40px;
  height: 40px;

  position: absolute;
  z-index: 1001;
  cursor: pointer;
  border: none;
  background-color: transparent;

  right: 15%;
`

export const Ul = styled.ul`
`

export const Li = styled.li`
  font-size: 26px;
  font-weight: 900;
  color: transparent;
  list-style: none;

  cursor: pointer;
  position: relative;
  display: block;
  transition: 0.5s;

  -webkit-text-stroke: 1px ${DEFUALT_COLORS.white01};

  line-height: 3.2rem;

  :hover {
    color: ${DEFUALT_COLORS.white01};
    -webkit-text-stroke: 1px ${DEFUALT_COLORS.black01};

    :before{
      color: ${DEFUALT_COLORS.red01};
      z-index: 1;
     -webkit-text-stroke: 1px ${DEFUALT_COLORS.black01};
      transform: translate(5px, -5px);
    }
    :after{
      color: ${DEFUALT_COLORS.green01};
      z-index: 2;
     -webkit-text-stroke: 1px ${DEFUALT_COLORS.black01};
      transform: translate(10px, -10px);
    }
  }

  :before, :after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
  }

`
