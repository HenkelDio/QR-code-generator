import Header from '../header';
import Card from '../card';

import { Container } from './styles';

export default function Layout({ onHandleTheme, currentTheme }) {
  return (
    <Container>
      <Header
        onHandleTheme={onHandleTheme}
        currentTheme={currentTheme}
      />
      <Card />
      <p>Desenvolvido por Willian Henkel</p>
    </Container>
  );
}
