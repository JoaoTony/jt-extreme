import styled from 'styled-components';
import { DEFUALT_COLORS } from '../../../config/themes/default-colors';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);

  position: relative;
  z-index: 20 !important;

  background-image: url('/images/01.png');
  background-size: cover;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/splash.jpg');
    background-position: center;
    background-size: 100%;
    mix-blend-mode: screen;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  z-index: 20 !important;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 120px 15% 0;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`

export const TextsWrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    width: 50%;
    align-items: flex-start;
    justify-content: flex-start;
    height: 60%;
  }
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  color: ${DEFUALT_COLORS.white01};
  background-color: ${DEFUALT_COLORS.black01};
  padding: 20px;
  display: block;
`

export const ButtonHome = styled.button`
  width: 100%;
  padding: 10px;
  overflow: hidden;

  font-size: 20px;
  font-weight: 600;
  color: ${DEFUALT_COLORS.white01};
  background-color: ${DEFUALT_COLORS.black01};

  border: 1px solid ${DEFUALT_COLORS.black01};
  border-radius: 8px;

  transition: all 0.5s ease;

  cursor: pointer;

  @media (min-width: 700px) {
    width: auto;

    height: 50px;
    margin: 20px 0;
    cursor: pointer;
    padding: 10px 30px;
  }

  :hover {
    background-color: transparent;
    color: ${DEFUALT_COLORS.black01};
    border: 1px solid ${DEFUALT_COLORS.black01};
  }
`
