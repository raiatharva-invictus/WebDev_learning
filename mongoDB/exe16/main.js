import { Emp } from "../exe16/models/emp.js";
import express from "express"
import cors from "cors";
import mongoose from "mongoose"

const app = express()
app.use(cors());

await mongoose.connect("mongodb://localhost:27017/emp")

let names = ["Atharva", "Rohan", "Vedant"]
let salary = [45000000, 35000000, 25000000]
let language = ["python", "rust", "c++"]
let city = ["NewYork", "Indore", "Noida"]
let isManager = [true, false]
function randomgen(){
    return Math.floor(Math.random() * 3);
}
function randomgenbool(){
    return Math.floor(Math.random() * 2);
}

app.get('/generate', async (req, res) => {
    await Emp.deleteMany({});
    for (let i = 1; i <= 10; i++) {
        const gen = new Emp({
            name: names[randomgen()],
            salary: salary[randomgen()],
            language: language[randomgen()],
            city: city[randomgen()],
            isManager: isManager[randomgenbool()]
        });
        await gen.save();
    }
    res.json({ message: "Data generated successfully!" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});