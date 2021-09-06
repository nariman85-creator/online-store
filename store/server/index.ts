import express from 'express';
import mongoose from 'mongoose';


const app=express();

mongoose.connect('mongodb://localhost:27017/product').then(()=>{
    app.listen(3001,()=>{
        console.log('Server to started');
        
    })
});






