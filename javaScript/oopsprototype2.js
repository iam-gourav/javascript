let myFname = "gourav     ";
let myLname = "sharma    ";

// console.log(myFname.length);
// it is a property of js

// let see an example str have a string with some spaces if we want actual string length we can use trim() methods but we can create custom methods in this


let str = "string    ";

let avengers = ["thor" , "captain"]

let avengers2 = {
    thor:"hammer",
    captain:"shield",

    getCaptainPower: function(captain){
        // this.captain = captain
        // if we don't write this.captain = captain it gives output shield
        console.log(`the power of captain is ${this.captain}`);
    }
}

// console.log("hi");
// console.log(avengers2.getCaptainPower("hammer"));


// function , array , string are going through the object

Object.prototype.getData = function(){
    console.log("we can get data");
}


// avengers2.getData()
// it works on an object

// avengers.getData()
// it also works on an arrays

// through the object prototype we can use methods in string , arrays , objects


Array.prototype.getDataFromArray = function(){
    console.log("getting data from array");
}

// avengers.getDataFromArray()
// avengers2.getDataFromArray();
// Error
// avengers2.getDataFromArray is not a function at Object.<anonymous> 
// because we created the getDataFromArray methods only for Array so it works only for array
// in case of Object methods works all the things which goes through the objects

// Inheritance

let user = {
    userName:"Aman",
    email:"aman@gmail.com"
}

let Teacher = {

    subject:"javaScript"
}

let TeachingSupport = {
    isAvailable:false,

}

let TASupport ={
    assignments:"js",
    fulltime:true,
    __proto__:TeachingSupport
    // __proto__ work as a key and gives the object name whose properties want to access you
    // it's a older way of prototyple inheritance
}
// console.log(TASupport);
// output :- { assignments: 'js', fulltime: true }
// console.log(TASupport.__proto__);
// output :- { isAvailable: false } gives TeachingSupport properties

// Teacher.__proto__ = user;
// this is also older way of inheritance

// console.log(Teacher);

// output:- { subject: 'javaScript' }

// console.log(Teacher.__proto__);

// output:- { userName: 'Aman', email: 'aman@gmail.com' } gives user properties

// modern syntax 

Object.setPrototypeOf(Teacher , user)
// teacher access the properties of user

// console.log(Teacher.__proto__);



let str2 = "another string      "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(this.trim().length);
}

str2.trueLength()

"aman".trueLength()
"haresh  ".trueLength()

// we have created trueLength method

