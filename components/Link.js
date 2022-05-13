import NextLink from 'next/link';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const Link = (props) => {
  if (BACKEND_URL) {
    return <NextLink {...props} as={BACKEND_URL + props.href} />;
  }
  return <NextLink {...props} />;
}

export default Link;