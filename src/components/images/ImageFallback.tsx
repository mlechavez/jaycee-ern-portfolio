import classNames from "classnames";

type ImageFallbackProps = {
  alt: string;
  aos?: string;
  className?: string;
  fallback: string;
  srcSet: string;
  type?: string;
  [key: string]: any;
};
const ImageFallback = (props: ImageFallbackProps) => {
  const { alt, aos, className, fallback, srcSet, type = "image/webp" } = props;
  return (
    <picture>
      <source srcSet={srcSet} type={type} />
      <img
        // {...props}
        src={fallback}
        alt={alt}
        className={classNames(className)}
        data-aos={aos}
      />
    </picture>
  );
};

export default ImageFallback;
