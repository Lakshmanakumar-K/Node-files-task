import express from "express"
import {createFile} from "../file_task.js"

const createRouter = express.Router();


// Create folder - Files by default  and write content
// Folder name can also passed in body of request

createRouter.post("/",(req,res)=>{
    const {folder} = req.body;
    const fl = folder || "Files" ;
    console.log(fl);

    let date = new Date();
    let dt = ("0"+date.getDate()).slice(-2);
    let mn = ("0"+(date.getMonth()+1)).slice(-2);
    let yr = date.getFullYear();
    let hr = ("0"+date.getHours()).slice(-2);
    let min = ("0"+date.getMinutes()).slice(-2);
    let sec = ("0"+date.getSeconds()).slice(-2);

createFile(`./${fl}/${dt}-${mn}-${yr}T-${hr}-${min}-${sec}.txt`,`${Date.now()}\n${date.toTimeString()}`,
()=>{res.json({msg:"Folder creation went wrong"});},
()=>{res.json({msg:"Folder and file created successfully"});},
()=>{res.json({msg:"File created successfully"});}
);
});

export default createRouter