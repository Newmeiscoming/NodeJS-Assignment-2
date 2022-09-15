const readLine = require("readline");
const read = readLine.createInterface(
        process.stdin,process.stdout
);

read.question('Please enter your name: ',(Name)=>{
    console.log(`Hello ${Name}`);
    read.close();
});