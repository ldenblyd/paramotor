import { FileType, OnChangeProps } from "hooks/useFileUploader";
import { useRef } from "react";

export interface Props {
  fileType: FileType;
  onChange: (props: OnChangeProps) => void;
}

const UploadByBtn: React.FC<Props> = ({ fileType, onChange }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  const onChangeFileInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();
    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    onChange({
      formData,
      url: URL.createObjectURL(event.target.files[0]),
    });
  };

  const acceptMapping = {
    image: "image/*",
    // pdf: "application/pdf",
  };

  return (
    <div className="text-center">
      <button
        className="border p-2 rounded-md hover:bg-gray-100"
        type="button"
        onClick={onClickHandler}
      >
        upload {fileType}
      </button>
      <input
        accept={acceptMapping[fileType] || ""}
        multiple={false}
        onChange={onChangeFileInputHandler}
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
      />
    </div>
  );
};

export default UploadByBtn;
