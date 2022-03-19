import { FC } from 'react';

import { Bar, Container } from './burgger-menu.styles';

const BurggerMenu: FC<{ changeShape: boolean}> = ({ changeShape }) => (
  <Container>
    <Bar changeShape={changeShape} />
  </Container>
)

export default BurggerMenu;
