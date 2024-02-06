import { Footer } from '../components/footer/footer';
import Header from '../components/header/header';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <Header />
      <main className='p-3'>
      <Outlet />
      </main>
    <Footer />
    </>
  );
}

export default RootLayout;
