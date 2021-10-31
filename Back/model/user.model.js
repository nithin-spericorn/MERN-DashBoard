const mongoose=require('mongoose')
const User = mongoose.model(
    "User",
    new mongoose.Schema({
    
        
          username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            index: true,
            lowercase: true,
          },
          email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
          },
         password: {
            type: String,
            required: true,
          },
          isAdmin: {
            type: Boolean,
            default: false,
          },
          img:{type:String,
               }
        },
          
        {timestamps: true }

    
  
  
    )
  );
  
  module.exports = User;