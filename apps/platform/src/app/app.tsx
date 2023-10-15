import { Core } from '@bamur/core';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Main from '../components/main/main';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  return (
    <>
    <Header></Header>
    <main>
      <Main></Main>
    <div>
    <Core></Core>
    </div>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
