import { error } from "console";
import inquirer from "inquirer";
import x from "qr-image";
import fs from "fs";

inquirer
 .prompt([
    {"message": "type in your url:", 
    "name": "url"}
 ])
 .then((answers)=>{
    const url = answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("url.txt",url,(err)=> {
        if (err) throw err;
        console.log("the file has been saved:");
    });
 })
.catch((error)=> {
    if (error.isTtyError){
        //prompt couldn't be rendered in the current environment
    } else {
        //Something else went wrong 
    }
});


/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
 