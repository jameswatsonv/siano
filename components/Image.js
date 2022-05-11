import NextImage from "next/image";

// This is necessary because we do some weird stuff for GitHub pages. We can remove this eventually
export default function Image(props) {
  const _props = {
    ...props,
    src: process.env.NEXT_PUBLIC_BACKEND_URL + props.src,
  }
  return (
    <NextImage
      {..._props}
      unoptimized={true}
    />
  );
}