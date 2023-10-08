import mongoose, { Schema,models } from "mongoose";

    const productSchema= new  Schema({

        title: {type:String, required:true},
        description: {type:String, required:false},
        price: {type:Number, required:true}

    },
    {timestamps: true,}
    )


    export const Product =models.Product||mongoose.model('Product',productSchema)