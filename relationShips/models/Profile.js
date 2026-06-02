import mongoose, { Schema } from 'mongoose';

const profileSchema= new Schema({
    bio:String,
    avatar:String,
    user:{type:Schema.Types.ObjectId, ref:'User'}
});

const Profile= mongoose.model('Profile', profileSchema);
export default Profile;