import express from "express"
import fs from "fs";

const fetchRouter = express.Router();

// Fetch all files in folder - Files
// Folder name can also passed in body of request

fetchRouter.get("/",(req,res)=>{
    const {folder} = req.body;
    const fl = folder || "Files"
    fs.readdir(`./${fl}`,"utf-8",(err,files)=>{
        if(err){
            res.status(404).json({msg:"folder not found"})
        }
        else{
            res.json(files);
        }
    });
});

// Folder name can be provided with URL as path params

fetchRouter.get("/:folder",(req,res)=>{
    const folder = req.params.folder;
    console.log(folder);
    fs.readdir(`./${folder}`,"utf-8",(err,files)=>{
        if(err){
            res.status(404).json({msg:"file not found"})
        }
        else{
            res.json(files);
        }
    })
});

export default fetchRouter;