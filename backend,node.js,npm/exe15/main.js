import path from "path"
import fs, { readdir, readdirSync } from "fs"

let mypath = "D:\\Web Dev (Workspace)\\WebDev_learning\\backend,node.js,npm\\exe15\\test"

let arr = readdirSync(mypath, (err, files)=>{
    return files
})

let dir = []
let found = false
for (const e of arr) {    
    for(const p of dir){
        if(path.extname(e) == p){
            found = true
        }
    }
    
    if(!found) dir.push(path.extname(e));
    found = false
}
// to create a new dir based on unique ext found
for(const e of dir){
    fs.mkdirSync(path.join(mypath, e.slice(1)))
}

for(const e of arr){
   fs.renameSync(path.join(mypath, e), path.join(mypath,path.extname(e).slice(1),e))
}
