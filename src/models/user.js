import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
username:{
    type:String,
    required:true,
    
},
email:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
},
img:{
    type:String,
    required:true,
},
isAdmin:{
    type:Boolean,
    default:false
},
},{
    timestamps:true
})



// post Schema 

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    desc:{
        type:String,
        required:true,
    },
   
    img:{
        type:String,
    },
    userId:{
        type:String,
        required:true
    },

    slug:{
        type:String,
        required:true
    },

    },{
        timestamps:true
    })


    export const User = mongoose.models.User || mongoose.model("User", userSchema)
    export const Post = mongoose.models.Post || mongoose.model("Post", postSchema)