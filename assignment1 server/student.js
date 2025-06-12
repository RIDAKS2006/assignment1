const mongoose= require('mongoose');
const studentdata = new mongoose.Schema({
    name: String,
    rollno : Number,
    course : String
})

module.export= mongoose.model('student', studentdata)