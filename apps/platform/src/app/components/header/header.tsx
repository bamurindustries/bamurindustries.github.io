import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className={styles['container']}>
      <span className={styles['logo']}>BEPL</span>
    </header>
  );
}

export default Header;
