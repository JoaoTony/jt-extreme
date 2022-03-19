import { FC } from 'react';
import {
  Container,
  Content,
  TextsWrapper,
  Title,
  ButtonHome
} from './landing-page-home.styles';

const LandingPageHome: FC = () => (
  <Container>
    <Content>
      <TextsWrapper>
        <Title>FIND YOUR</Title>
        <Title>VOCATION HERE</Title>

        <ButtonHome>Try it for free</ButtonHome>
      </TextsWrapper>
    </Content>
  </Container>
)

export default LandingPageHome;
