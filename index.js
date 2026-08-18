    
let Role = "Admin";
let passWord = "TheMaster";

if (Role === "Admin") {
    console.log('Enter Password');
    if (passWord === "TheMaster") {
        console.log("Welcome");
    } else if (passWord != "TheMaster") {
        console.log("Wrong Password");
    }
} else if (Role != "Admin") {
    console.log("I dont know you");
}



