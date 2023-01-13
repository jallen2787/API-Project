import mongoose from "mongoose";
const Schema = mongoose.Schema;

let User = new Schema ({
    id: String,	
    name: String, 
    username: String,
    profile_location: String, 
    profile_bio: String,
    profile_url: String,
    avatar_url: String,
    resource: String,
    resource_path: String
})

export default mongoose.model("users", User);

