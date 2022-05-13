import NextImage from "next/image";

// This is necessary because we do some weird stuff for GitHub pages. We can remove this eventually
const Image = (props) => {
  return (
    <NextImage
      {...props}
      src={process.env.NEXT_PUBLIC_BACKEND_URL + props.src}
      unoptimized={true}
    />
  );
}

export default Image;