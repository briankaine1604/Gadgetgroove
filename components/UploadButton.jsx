"use client"
import { CldImage, CldUploadButton } from "next-cloudinary"
import { useState } from "react"

const UploadButton = ({imageid,display}) => {
   
  
    return (
      <main className="rounded mt-3 border flex w-full flex-col">
        <CldUploadButton
          onUpload={display}
          className="w-20 h-7 rounded bg-gray-300"
          uploadPreset="zp35znzb"
          
        />

       <div className="flex flex-wrap">
       {imageid.map((public_id, index) => (
          <div className="m-2"><CldImage
            key={index}
            src={public_id}
            alt={`Uploaded Image ${index + 1}`}
            width="150"
            height="150"
            className="flex"
          /></div>
        ))}
       </div>
      </main>
    );
  };
  
  export default UploadButton;
