import mongoose from "mongoose"

const blogSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    desc:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    
    img:{
        type:String,
    },
    author:{
        type:String,
    },

    slug:{
        type:String,
        required:true
    },

    },{
        timestamps:true
    })


    export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema)