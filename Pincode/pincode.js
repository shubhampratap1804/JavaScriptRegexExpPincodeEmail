const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question(`Enter a pincode: `,(pincode) =>{
    let pincodeRegex = RegExp('^([0-9]{3})[ ]([0-9]{3}$)');
    if(pincodeRegex.test(pincode)){
        console.log("Congratulations, your pincode have passed the test!");
    }
    else console.log("Sorry your pincode is invalid!!");
    rl.close();
});