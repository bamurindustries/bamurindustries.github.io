import 'typeface-roboto';

import { Core } from '@bamur/core';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';

export function App() {
  return (
    <>
    <Header></Header>
    <main className='w-full h-full'>
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
