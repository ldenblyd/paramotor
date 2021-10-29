import UploadByBtn from "./UploadByBtn";
import UploadByUrl from "./UploadByUrl";
import ImagePreview from "./preview/Image";
import { UseFileUploader } from "hooks/useFileUploader";

const FileInput: React.FC<UseFileUploader> = ({
  fileType,
  onChange,
  value,
  onError,
  reset,
}) => {
  return (
    <div className="flex flex-col border-b bg-white">
      {value && (
        <div className="w-full flex flex-col items-center p-4">
          <ImagePreview url={value} onError={onError} />
          <button
            className="border mt-2 p-2 rounded-md hover:bg-gray-100"
            type="button"
            onClick={reset}
          >
            remove
          </button>
        </div>
      )}
      {!value && (
        <div className="flex flex-col p-4">
          <UploadByBtn fileType={fileType} onChange={onChange} />
          <div className="text-center my-4">or</div>
          <UploadByUrl onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default FileInput;
