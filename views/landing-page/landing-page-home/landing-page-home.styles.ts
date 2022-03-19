import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

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
