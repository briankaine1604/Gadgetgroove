"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import UploadButton from "./UploadButton";

export default function ProductsForm({
  id,
  title: Atitle,
  description: Adescription,
  price: Aprice,
}) {
  const [title, setTitle] = useState(Atitle || "");
  const [description, setDescription] = useState(Adescription || "");
  const [price, setPrice] = useState(Aprice || "");

  const router = useRouter();

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
      <form action="" onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="">Product</label>
        <input
          type="text"
          className="w-full sm:w-1/2"
          placeholder="New Products"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <UploadButton/>
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
