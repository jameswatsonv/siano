import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

const headerPaths = {
  'Home': '/',
  'About': '/about',
  'Puppies': '/puppies',
  'Contact Us': '/contact',
};

const Nav = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const HeaderLink = ({text, href}) => {
    let className = styles.navLink ?? '';
    if (currentPath === href) {
      className += ` ${styles.activeNavLink}`;
    }
    return <Link href={href}>
      <a className={className}>{text}</a>
    </Link>
  };

  const headerLinks = Object.entries(headerPaths).map(([text, href]) => <HeaderLink text={text} href={href} key={href} />);
  return <nav className={styles.headerNav}>{headerLinks}</nav>
}

const HeaderBar = ( { phone = {} }) => {
  const { number, display } = phone;
  return <div className={styles.headerBar}>
    <div>Call Us! <a href={`tel:+1${number}`}>{display}</a></div>
  </div>;
};

function Header({ data: { contact = {} }}) {
  const  { phone } = contact;
  return <>
    <Head>
      <title>San Diego Frenchies</title>
      <meta name="description" content="French bulldog adoption in San Diego" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HeaderBar phone={phone} />

    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'><a className={styles.headerLogoLink}>SDFrenchie</a></Link>
        
        <Nav />
      </div>
    </header>
  </>;
}

export default Header;