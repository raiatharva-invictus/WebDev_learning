import mongoose from "mongoose";

const EmpSchema = new mongoose.Schema({
    name : String,
    salary : Number,
    language : String,
    city : String,
    isManager : Boolean
})

export const Emp = mongoose.model('Employee', EmpSchema)