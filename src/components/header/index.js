import Button from '../Button';
import { Container } from './style';

export default function Header({ onHandleTheme, currentTheme }) {
  return (
    <Container>
      <h1>QR CODE GENERATOR</h1>
      <Button
        type="button"
        onClick={onHandleTheme}
      >
        {currentTheme === 'dark' ? '🌞' : '🌚'}
      </Button>
    </Container>
  );
}
