const repeatString = function(string, number) {
    
    if (number < 0) {
        return "ERROR"
    }
     
    let myString = "";
    for (let i = 0; i <number; i++) {
        myString += string;
    }
    return myString;
};

// Do not edit below this line
module.exports = repeatString;
