import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="contact-info">
          <p className="company-name">
            Bamur Industries & Engineering Private Limited
          </p>
          <p className="enquiries">
          Call For Enquiries <a href="tel:+919044991559">+91-904-499-1559</a>
          </p>
          <p className="email">
          Email us: <a href="mailto:bamurindustries@gmail.com">bamurindustries@gmail.com</a>
          </p>
        </div>
      </div>
      <p className="copyright">
          &copy; {new Date().getFullYear()} Bamur Industries & Engineering Private Limited. All rights reserved.
        </p>
    </div>
    </footer>
  );
}

export default Footer;
