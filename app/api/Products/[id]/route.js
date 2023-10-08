import { ConnectMongoDB } from "@lib/mongodb";
import { Product } from "@models/products";
import { NextResponse } from "next/server";

export async function PUT (req,{params}){
    const {id}= params
    const {newTitle: title, 
        newDescription: description, 
        newPrice:price}=await req.json();

        await ConnectMongoDB();
        await Product.findByIdAndUpdate(id,{title,description,price});
        console.log({title,description,price})
        return NextResponse.json({message:"Topic Updated"},{status:200})
}

export async function GET(req,{params}) {
    const {id}= params
    await ConnectMongoDB();
    const products= await Product.findOne({_id: id})
    return NextResponse.json({products},{status:200})
}