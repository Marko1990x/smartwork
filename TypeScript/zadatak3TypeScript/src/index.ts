//import {registar} from './class'   // registar


class registar {
    userName: string;
    password: string;
    constructor(name: string, pass: string) {
        this.userName = name;
        this.password = pass;
    }
}

function toRegPageX() {
    location.replace("./additionalAnnoyance/registrationForm.html");  // podeseno ok
}

function loggedInPage() {
    location.replace("./additionalAnnoyance/loggedInPage.html"); // podeseno ok
}


let userName = 'Marko';
localStorage.setItem(userName, userName);

let userPass = 'MarkoPass';
localStorage.setItem(userPass, userPass);

let userName2 = 'Nikola';
localStorage.setItem(userName2, userName2);

let userPass2 = 'NikolaPass';
localStorage.setItem(userPass2, userPass2);

let userName3 = 'Damjan';
localStorage.setItem(userName3, userName3);

let userPass3 = 'DamjanPass';
localStorage.setItem(userPass3, userPass3);

// part of the old code no longer needed

// let user1 = new registar(userName, userPass);
// let user2 = new registar(userName2, userPass2);
// let user3 = new registar(userName3, userPass3);

let i = 0,
    oJson = {},
    sKey;
let check = 0;

for (; sKey = window.localStorage.key(i); i++) {
    if (i % 2 == 0) { // even values for i
        var x = window.localStorage.getItem(sKey);  // how to get every second value
        //console.log(x + " " + "this is from the first condition");
    } else if(i % 2 == 1) {
        var y = window.localStorage.getItem(sKey);
        //console.log(y + " " + "this if from the second condition");
    }

    let userX = new registar(x, y);
    console.log(userX);
}

console.log("pick one of the objects from console to login");
console.log("or enter nonsence and make your own");
//let bullShitticusMaximus = [user1, user2, user3];
//export default bullShitticusMaximus;

//#region 
// function start() {
//     let param1 = userNameSent;
//     let param2 = userPassSent;
//     (<HTMLInputElement>document.getElementById("loginButton")).addEventListener("click", check(param1,param2));
// }

// function check(name: string, pass: string) {

//     console.log(name + " check " + pass + " these are the values sent by the button")

//     if (userName === name) {
//         console.log("ok")
//     }

//     if (userPass === pass) {
//         console.log("ok 2")
//     }

//     return console.log(name + pass)
// }
//#endregion

document.getElementById("loginButton").addEventListener("click", function () {
    let userNameSent = ((<HTMLInputElement>document.getElementById("enterUsername")).value);
    console.log(userNameSent + " this is the username sent by the app ");

    let userPassSent = ((<HTMLInputElement>document.getElementById("enterPassword")).value);
    console.log(userPassSent + " this is the userpass sent by the app");

    //console.log("ok");
    console.log(userNameSent + " " + userPassSent);

    let i = 0,
        oJson = {},
        sKey;
    let check = 0;
    let xCheck = 100;
    for (; sKey = window.localStorage.key(i); i++) {
        if (i % 2 == 0) { // even values for i
            var x = window.localStorage.getItem(sKey);  // how to get every second value
            //console.log(x + " " + "this is from the first condition");
        } else {
            var y = window.localStorage.getItem(sKey);
            //console.log(y + " " + "this if from the second condition");
        }

        
        if(x == userNameSent && y == userPassSent){
            console.log("excelente it works");
            xCheck = -100;
            loggedInPage();
            // this works great add the page for sucessufull login now
        }
    }

    if(xCheck > 0){
        alert("Korisnicko Ime nije pronadjeno, forgot your password ?");
    }

    //#region 
    // let x1 = [user1, user2, user3], string;
    //console.log(x1);

    // for (let i = 0; i < x1.length; i++) {
    //     const element = x1[i];
    //     console.log("sent by for loop")
    //     console.log(element);
    // let x: boolean = false;
    // let x: number = -1;
    // if (element.userName == userNameSent && element.password == userPassSent) {
    // x = true;
    // console.log(x + " this is the boolean value");
    // x = 1;
    // console.log("check is ok opening new page")
    // location.replace("../additionalAnnoyance/login.html")
    // document.getElementById("loginButton").removeEventListener("click", function(){
    // try and fix this part
    // });

    //     }
    //     else if (x < 0) {
    //         console.log("nije pronadjen objekat u ovoj iteraciji");
    //     }
    // }

    // if(userName === userNameSent && userPass == userPassSent){
    //     console.log("ok it works first set of values");
    // }
    // if(userName2 === userNameSent && userPass2 == userPassSent){
    //     console.log("ok it works first set of values");
    // }
    // if(userName3 === userNameSent && userPass3 == userPassSent){
    //     console.log("ok it works 3");
    // }
    //#endregion

});

document.getElementById("text").addEventListener("click", function () {
    toRegPageX();
});

// console.log(user1, user2, user3);