import {Schema,model} from 'mongoose';
import { number } from 'prop-types';




const productsSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    count:number,
    price:number,
    likes:number,


},
{
    timestamps: true
});

const Products=model('Product',productsSchema);

export default Products;