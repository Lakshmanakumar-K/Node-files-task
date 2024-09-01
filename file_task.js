import fs from "fs";

export const createFile = (path,content,folder_err,folder_succ,file_succ) => {
    console.log(path);
    let folder = path.split("/")[1];
    console.log(folder);

    if(!fs.existsSync(folder)){
        fs.mkdir(folder,(err,succ)=>{
        if (err){
            folder_err();
        }else{
            
            fs.writeFile(path,content,()=>{
                folder_succ();
        })
        }
    });
    }
    else{
        fs.writeFile(path,content,()=>{
        file_succ();
});
    }
};

