import express from 'express'
import bodyParser from 'body-parser';

let app = express()

app.use(bodyParser.json());

app.get("/",
    (req,res)=>{
        console.log(req.body);
        console.log("Get request received");
        res.json({
            message:"Hello World"
        })
    }
)

app.listen(5000,
    ()=>{
        console.log("server on running on port 5000");
    }
)

