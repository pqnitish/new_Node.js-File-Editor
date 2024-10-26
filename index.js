const fs = require("fs");
const path = require("path");
const operation = process.argv[2]; // read,delete,create,append,rename,list
const fileName = process.argv[3]; // the file to be affected
const content = process.argv[4]; // content for the append
const filePath = path.join(__dirname, fileName); // full path to file or directory
// read
switch (operation) {
  case "read":
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log(`error in reading file ${err.message}`);
      } else {
        console.log(data);
      }
    });
    break;
  case "create":
    fs.writeFile(filePath, (err) => {
      if (err) {
        console.log(`error in creating file ${err.message}`);
      } else {
        console.log(`File ${fileName} created`);
      }
    });
    break;
  case "delete":
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(`error in deleting file ${err.message}`);
      } else {
        console.log(`File ${fileName} deleted successfully`);
      }
    });
    break;
  case "append":
    fs.appendFile(filePath, content + "\n", (err) => {
      if (err) {
        console.log(`error in appending content: ${err.message}`);
      } else {
        console.log(`Content appended to file ${fileName}`);
      }
    });
    break;
  case "rename":
    const newPath = path.join(__dirname, content);
    fs.rename(filePath, newPath, (err) => {
      if (err) {
        console.log(`Error in renaming file ${err.message}`);
      } else {
        console.log();
        console.log(`File ${fileName} renamed ${content}`);
      }
    });
    break;
    case "list":
        fs.readdir(filePath,(err,files)=>{
            if(err){
                console.log(`Error in listing directory:${err.message}`);
                
            }else{
                files.forEach((file)=>{
                    console.log(file);
                    
                })
            }
        });
         break;
}
