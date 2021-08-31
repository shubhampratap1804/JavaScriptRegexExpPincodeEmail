const readline = require(`readline`);
const rl = readline.createInterface({

    input:process.stdin,
    output:process.stdout
});

rl.question(`Enter an email: `,(email) => {
    let emailRegex = RegExp('([a-zA-Z0-9./.-])+.([a-zA-Z0-9./.-])?@([a-z]{2,10})+.([a-z]{2,4})?');
    if(emailRegex.test(email)){
        console.log("Congratulations, your email is valid!");
    } else console.log("Sorry your email is invalid!");
    rl.close();
});
