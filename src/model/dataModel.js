const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    profileImg: {type: Buffer},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    group: {type: String,required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Number, default: 1}, // 1: student, 2:teacher, 3: admin
})
const groupSchema = new mongoose.Schema({
    groupName: {type: String, required: true},
    company: {type: String, required: true},
    teacher: {type: String, required: true},
})
const categorySchema = new mongoose.Schema({
    categoryName: {type: String, required:true},
    categoryImg: {type: Buffer, required: true}
})
const questionSchema = new mongoose.Schema({
    question: {type: String, required: true},
    rightQuestion: {type: String, required: true},
    variants: {type: Array, required: true}
})
const examSchema = new mongoose.Schema({
    examName: {type: String, required: true},
    questionsCount: {type: Number, required: true},
})
const User = mongoose.model("users", userSchema)
const Group = mongoose.model("groups", groupSchema)
const Category = mongoose.model("categories", categorySchema)
const Question = mongoose.model("questions", questionSchema)
const Exam = mongoose.model("exams", examSchema)

module.exports = {User,Group,Category,Question,Exam}
