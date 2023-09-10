import { Core } from '@bamur/core';
import NxWelcome from './nx-welcome';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  return (
    <>
    <Core></Core>
    <div>
      <NxWelcome title="platform" />
    </div>
    </>
  );
}

export default App;
