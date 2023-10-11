import { CldImage, CldUploadButton } from "next-cloudinary"
import { useState } from "react"

/*const UploadResult = {
    info:{
        public_id:String
    },
    event:'success',
}*/

const UploadButton = () => {

    const [imageid,setImageid]= useState('')
    
   const display=(result)=>{setImageid(result.info.public_id)}
  return (
    <main className=" rounded mt-3">
        <CldUploadButton 
        onUpload={display} 
        className="w-20 h-7 rounded bg-gray-300"  
        uploadPreset="zp35znzb" />
        {
            imageid &&(
                <CldImage
            width="300"
            height="300"
            src={imageid}
            sizes="100vw"
            alt="Description of my image"
            />
            )
        }
    </main>
  )
}

export default UploadButton