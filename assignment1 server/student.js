const mongoose= require('mongoose');
const StudentData = new mongoose.Schema({
    name: String,
    rollno : Number,
    course : String
})

module.exports= mongoose.model('Student', StudentData)