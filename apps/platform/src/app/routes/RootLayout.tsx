import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <Header />
      <main>
      <Outlet />
      </main>
    <Footer />
    </>
  );
}

export default RootLayout;
