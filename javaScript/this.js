// console.log(this);

//output:- {}
// in node this gives empty object
// in browser this refers global object that is window
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.


// when we refer the current context we use this keyword
let myobj = {
    username: "gourav",
    welcomemsg:function(){
        console.log(`${this.username} , welcome to the webpage`);
        // without this username can't be access
    }
}
// this refers  the current context 
// myobj.welcomemsg()
//gourav , welcome to the webpage
// myobj.username = "goga"
// current context now change
// which means current value is change
// myobj.welcomemsg()
// goga , welcome to the webpage

// console.log(this);
// gives empty object

function msg(){
    let username = "gourav"
    // console.log(this.username)
    // undefined
    // context work only in objects not in function
}
// msg()

// let  data1 = function(){
//     let username = "gourav"
//     console.log(this.username)
//     // undefined
// }
// data1()


let  data2 = ()=>{
    let username = "gourav"
    console.log(this.username)
    // undefined
}
// data2()

//****************arrow funtion****************/
// 1st example
// let addTwo = (num1 , num2)=>{
//     return num1+num2
// }
// console.log(addTwo(4 ,5));

// 2nd example


// implicit return which means remove curly braces and return keyword
// let addTwo = (num1 , num2)=>   num1+num2

// console.log(addTwo(4 ,5));

//example 3
// in parenthises no need to write return
// let addTwo = (num1 , num2)=>   (num1+num2)

// console.log(addTwo(4 ,5));

// return objects
let addTwo = (num1 , num2)=>   ({username:"gourav'"})

console.log(addTwo(4 ,5));