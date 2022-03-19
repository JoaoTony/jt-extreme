import { FC } from 'react';
import LandingPageHome from './landing-page-home';
import LandingPageMenu from './landing-page-menu';

import { Container } from  './landing-page.styles'

const LandingPage: FC = () => (
  <Container>
    <LandingPageMenu />
    <LandingPageHome />
  </Container>
)

export default LandingPage
