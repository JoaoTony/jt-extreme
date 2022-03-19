import styled from "styled-components";
import { DEFUALT_COLORS } from "../../config/themes/default-colors";

export const Container = styled.button`
  width: 40px;
  height: 40px;

  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const Bar = styled.div<{ changeShape: boolean}>`
  width: 20px;
  height: 4px;
  border-radius: 4px;
  background-color: ${({ changeShape }) => changeShape ? DEFUALT_COLORS.black01 : 'transparent'};
  position: relative;
  transition: all ease 0.5s;

  :before {
    content: '';
    position: absolute;
    transition: all ease 0.5s;
    width: 30px;
    height: 4px;
    border-radius: 4px;
    background-color: ${({ changeShape }) => changeShape ? DEFUALT_COLORS.black01 : DEFUALT_COLORS.white01};
    transform:  ${({ changeShape }) => changeShape ? ' translateY(-10px) rotate(0)' :  'translateY(0) rotate(-45deg)' };
    right: 0;
  }

  :after {
    content: '';
    position: absolute;
    transition: all ease 0.5s;
    width: 30px;
    height: 4px;
    border-radius: 4px;
    background-color: ${({ changeShape }) => changeShape ? DEFUALT_COLORS.black01 : DEFUALT_COLORS.white01};
    transform:  ${({ changeShape }) => changeShape ? ' translateY(10px) rotate(0)' :  'translateY(0) rotate(45deg)' };
    right: 0;
  }
`
