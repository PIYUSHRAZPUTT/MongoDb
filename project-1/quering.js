import mongoose from "mongoose";

// connect database
await mongoose.connect('mongodb://localhost:27017/class');

// create schema
const studentSchema= new mongoose.Schema({
    name:{type:String, required:true},
    age:Number,
    email:{type:String, match:/.+\@.+\..+/},
    underage:{type:Boolean, default: true},
});

// create model
const Student= mongoose.model('Student', studentSchema);
// insert student

await Student.insertMany([
    {name:'Ayush', age:20, email:'Ayushrajpoot1488999@gmail.com'},
    {name:'Neelesh', age:20, email:'Neeleshrajpoot1488999@gmail.com'},
    {name:'Rashi', age:16, email:'Rashirajpoot1488999@gmail.com'},
    
]);

// find all student
const findAllStudent= await Student.find();
console.log(findAllStudent);

// // find the students
// const student= await Student.findOne({name:'Piyush'});
// student.age=30;
// await student.save();
// console.log(student);

// // find and update
// const student= await Student.findOneAndUpdate({name:'Piyush'},{age:21}, {new: true});
// console.log(student);

// // update Many
// const students= await Student.updateMany({age:{$gt:18}}, {$set:{underage:false}});
// console.log(students);

// // find by id and delete
// const student= await Student.findByIdAndDelete('6a1a8f1c03eef124caa29190');
// console.log(student);

// const student= await Student.deleteMany({age:{$lt:21}});
// console.log(student);

// await mongoose.disconnect();