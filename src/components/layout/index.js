import Header from '../header';
import Card from '../card';

export default function Layout({ onHandleTheme }) {
  return (
    <>
      <Header
        onHandleTheme={onHandleTheme}
      />
      <Card />

    </>
  );
}
