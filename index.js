//import the code from myModule that is being exported
// const myModule = require("./myModule.js")

// console.log(myModule.beBasic())
// // myModule.count()
// myModule.experiment()
// console.log(myModule)


//fs (filesystem) is a built in "core" module available for us to import
const fs = require("fs")

fs.readFile("story.txt", "utf8", (err,data)=>{
    if (err){
        console.log("there was an issue reading the file.")
    } else {
        console.log(data)
    }
})