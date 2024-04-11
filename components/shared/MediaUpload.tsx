"use client";

import { UploadCloudIcon } from 'lucide-react';
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from 'next-cloudinary';
import { useState } from 'react';


const MediaUpload = () => {
    const [resource, setResource] = useState<
      string | CloudinaryUploadWidgetInfo | undefined
    >();
  return (
 
<CldUploadWidget
  options={{ sources: ['local', 'url', 'unsplash'] }}
  signatureEndpoint="/api/sign-cloudinary-params"
  onSuccess={(result, { widget }) => {
    setResource(result?.info);
    widget.close();
  }}
>
  {({ open }) => {
    function handleOnClick() {
      setResource(undefined);
      open();
    }
    return (
        <button className="flex items-center flex-col" onClick={handleOnClick}>
          <UploadCloudIcon color="#475BE8" />
          <span className="font-medium text-[14px] leading-[22px]">
            Click to upload or drag and drop
          </span>
          <span className="font-medium text-[14px] leading-[22px]">
            SVG, PNG, JPG or GIF (max, 800x400px)
          </span>
      </button>
    );
  }}
</CldUploadWidget>
  )
}

export default MediaUpload
