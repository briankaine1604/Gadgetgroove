"use client"
import ProductsForm from "@components/ProductsForm";

const getTopicbyId =async(id)=>{
  try {
    const res = await fetch(`/api/Products/${id}`,{cache:"no-store"});

    if (!res.ok) {
      throw new Error ("Failed to fetch Topic")
 
    } 
    return res.json();
  } catch (error) {
    console.log(error)
  }
}

export default async function EditProductPage({params}) {
 
  const {id}= params;
  const {products}=await getTopicbyId(id)
  const {title,description,price}= products;
  return (
    <div className="w-full h-screen">
      <h1 className='text-xl font-bold'>Edit Product</h1>
      
        <ProductsForm  id={id} title={title} description={description} price={price} />
      
    </div>
  );
}
