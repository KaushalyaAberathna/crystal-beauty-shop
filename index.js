import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Student from './models/student.js';


let app = express()
mongoose.connect("mongodb+srv://admin:321@cluster0.otwbffy.mongodb.net/?appName=Cluster0").then(
    ()=>{
       console.log ("connected to the database");
    }
).catch(
    ()=>{
        console.log("Connection Failed");
    }
)
//mongodb+srv://admin:321@cluster0.otwbffy.mongodb.net/?appName=Cluster0

app.use(bodyParser.json());

app.get("/",
    (req,res)=>{
      Student.find().then(
        (students)=>{
            res.json(students)
        }
      ).catch(
        ()=>{
            res.json({
                message:"An error occured"
            })
            
        }
      )
    }
)

app.post("/",
        (req,res)=>{
         const student = new Student(req.body);

         student.save().then(
            ()=>{
                res.json({
                    message:"student saved successfully"
                })
            }
        ).catch(
            ()=>{
                res.json({
                    mesage:"Student save failed"
                })
            }
        )

    }
)

app.listen(5000,
    ()=>{
        console.log("server on running on port 5000");
    }
)

