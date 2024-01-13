let string = ["flower","flow","flight"]

function longestPrefix(input){
    let toCompare = input[0];
    let toCompare2 = input[1];
    let toCompare3 = input[2];
    
    let splitedToCompare = toCompare.split("")
    let splitedToCompare2 = toCompare2.split("")
    let splitedToCompare3 = toCompare3.split("")

    let prefix = ""

    for(x = 0; x< splitedToCompare.length; x++){
        if(splitedToCompare[x] === splitedToCompare2[x] && splitedToCompare[x] === splitedToCompare3[x] ){
            prefix += splitedToCompare[x] 
        }
    }
    console.log(prefix)
}

longestPrefix(string)

// Долго думал а решение оказалось простое
