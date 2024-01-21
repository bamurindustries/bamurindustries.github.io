import styles from './video.module.scss';

/* eslint-disable-next-line */
export interface VideoProps {}

export function Video(props: VideoProps) {
  return (
    <div className={`${styles['container']} ${styles['absolute']}`}>
            <video src="assets/home-video.mp4" role="presentation"  preload="auto"
            poster='assets/homepage.jpeg'
            muted loop  autoPlay
            className={`${styles['video']}  ${styles['absolute']} ` }
            height="840"
            width={'100%'}
            ></video>
            {/* <img  src='assets/homepage.jpeg' width="980" height="840" className={styles['absolute']} /> */}
            <div  className={styles['absolute']+ ' ' + styles['layer']}></div>
    </div>
  );
}

export default Video;
