import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, data }) {
  return (
    <div className={styles.page}>
      <Header data={data} />
      <main className={styles.pageContainer}>{children}</main>
      <Footer data={data} />
    </div>
  )
}