import NextImage from "next/image";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// This is necessary because we do some weird stuff for GitHub pages. We can remove this eventually
const Image = (props) => {
  return (
    <NextImage
      {...props}
      src={BACKEND_URL + props.src}
      unoptimized={true}
    />
  );
}

export default Image;