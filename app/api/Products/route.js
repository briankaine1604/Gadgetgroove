import { ConnectMongoDB } from "@lib/mongodb"
import { Product } from "@models/products";
import { NextResponse } from "next/server";

export async function POST(req){
   /* const body = await req.json()*/
    const {title,description,price} = await req.json()// if first line dont work replace and do same in rest of code
    console.log({title,description,price})
    await ConnectMongoDB();
    await Product.create({title,description,price});
    return NextResponse.json({message:"Product Registered"},{status:201})

}