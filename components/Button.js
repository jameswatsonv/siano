import Link from './Link';

const _Button = ({ type, onClick, children }) => {
  return <>
    <style jsx>{`
      button {
        padding: 1rem 2rem;
        color: white;
        border-radius: 6px;
        font-size: 1rem;
        cursor: pointer;
        border: none;
      }
      .primary {
        background-color: green;
      }
    `}</style>
    <button className={type} onClick={onClick}>{children}</button>
  </>;
};

const Button = ({ type = 'primary', href, onClick, children }) => {
  const btnClick = onClick ?? new Function();
  if (href) {
    return <Link href={href}><a><_Button type={type} onClick={btnClick}>{children}</_Button></a></Link>;
  }
  return <_Button type={type} onClick={btnClick}>{children}</_Button>;
}

export default Button;