import mongoose, { Schema } from 'mongoose';

const postSchema= new Schema({
    title:String,
    content:String,
    author:{type:Schema.Types.ObjectId, ref:'User'}
});

const Post = mongoose.model('Post', postSchema);
export default Post;