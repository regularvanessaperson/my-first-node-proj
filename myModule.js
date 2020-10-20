module.exports.beBasic = () => "That's so fetch!"

module.exports.experiment = () =>{
    count()
}
const count = () =>{
    for (let i=0; i<10; i++){
        console.log(i)
    }
}

//module.exports is an object that will hold code to be exported
