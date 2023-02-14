import { Container } from './style';

export default function Header({ onHandleTheme }) {
  return (
    <Container>
      <h1>QR CODE GENERATOR</h1>
      <button
        type="button"
        onClick={onHandleTheme}
      >
        Mudar tema
      </button>
    </Container>
  );
}
