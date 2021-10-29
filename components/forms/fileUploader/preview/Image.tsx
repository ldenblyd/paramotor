import Image from "next/image";

// todo export this for all images loaded

export interface Props {
  url: string;
  onError: () => void;
}
const ImagePreview: React.FC<Props> = ({ url, onError }) => {
  const customImgLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <Image
      src={url}
      loader={customImgLoader}
      alt="image"
      width={200}
      height={200}
      onError={onError}
    />
  );
};

export default ImagePreview;
