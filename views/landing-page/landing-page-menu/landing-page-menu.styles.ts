import styled from 'styled-components';
import { DEFUALT_COLORS } from '../../../config/themes/default-colors';

export const MenuContainer = styled.nav`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;

  background-color: ${DEFUALT_COLORS.black01};
`

export const Ul = styled.ul`
`

export const Li = styled.li`
  font-size: 26px;
  font-weight: 900;
  color: transparent;
  list-style: none;

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
