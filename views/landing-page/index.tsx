import { FC } from 'react';
import LandingPageMenu from './landing-page-menu';

import { Container } from  './landing-page.styles'

const LandingPage: FC = () => (
  <Container>
    <LandingPageMenu />
  </Container>
)

export default LandingPage
