"use client"
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import UploadButton from "./UploadButton";
import Imagecard from "./Imagecard";

export default function ProductsForm({
  id,
  title: Atitle,
  description: Adescription,
  price: Aprice=[],
  
}) {
  const [title, setTitle] = useState(Atitle || "");
  const [description, setDescription] = useState(Adescription || "");
  const [price, setPrice] = useState(Aprice || "");

  const router = useRouter();
  
  const formref = useRef()
  
  const [files, setfiles] = useState([]);

  const handleImage=(e)=>{
    const files= e.target.files
  const newfiles= [...files].filter(file=>{
    if(file.size<1024*1024 && file.type.startsWith('image/')){
      
      return file
    }else{
      alert('File is too large')
    }
  })
  setfiles(prev=>[...newfiles,...prev])
  formref.current.reset();
  }

  const handleDelete=(index)=>{
    const newfiles = files.filter((_,i)=>i !==index)
    setfiles(newfiles)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price) {
      alert("Title and Price are required");
      return;
    }

    

    try {
      if (id) {
        // Use a PUT request to update an existing product
        const res = await fetch(`/api/Products/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newTitle: title,
            newDescription: description,
            newPrice: price,
            
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to update product");
        } 
        router.refresh();
        router.push("/products");
        
      } else {
        // Use a POST request to create a new product
        const res = await fetch("/api/Products", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description, price }),
        });

        if (res.ok) {
          router.push("/products");
        } else {
          throw new Error("Failed to create new Product");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 w-full h-screen">
      <form action="" onSubmit={handleSubmit} className="flex flex-col" ref={formref}>
        <label htmlFor="">Product</label>
        <input
          type="text"
          className="w-full sm:w-1/2"
          placeholder="New Products"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="">Product</label>
        <input type="file" accept="image/*" multiple  onChange={handleImage} />
        <span className="text-red-600 text-sm font-bold">File must be less than 1mb. Maximum of 10 pictures</span>
        <div className="flex flex-wrap gap-2 ">{files.map((file,index)=>(
          <Imagecard key={index} url={URL.createObjectURL(file)} onclick={()=>handleDelete(index)}/>
        ))}
        </div>
        <label htmlFor="">Product Description</label>
        <input
          type="text"
          className="w-full sm:w-1/2 py-3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="">Price in Naira</label>
        <input
          type="text"
          className="w-full sm:w-1/2 py-3"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit" className="btn mt-2">
          Save
        </button>
      </form>
    </div>
  );
}
