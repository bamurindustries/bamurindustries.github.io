import { Video } from '@bamur/core';
import styles from './main.module.scss';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <div className={styles['container']}>
      <div className='bg-layer'>
      <Video />
      </div>
      <div className='content'>
      </div>
    </div>
  );
}

export default Main;
