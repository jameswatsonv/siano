import styles from '../styles/Layout.module.css';

const Footer = ({ data: { contact }}) => {
  const phoneDisplay = contact?.phone.display ?? '';
  const phoneNumber = contact?.phone.number ?? 0;
  const email = contact?.email ?? '';
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <section>
          <h4>About</h4>
          <p>As a small in-home kennel with a limited but well-planned breeding program, we are confident we have the best prices in San Diego for high quality Frenchies.</p>
        </section>
        <section>
          <h4>Contact</h4>
          <p>{phoneDisplay}</p>
          <p>{email}</p>
        </section>
        <section>
          <h4>Follow</h4>
          <a>Follow Us on Social Media</a>
        </section>
      </div>
      <div className={styles.footerFooter}>
        © SDFrenchie. All Rights Reserved. 2022
      </div>
    </footer>
  );
};

export default Footer;