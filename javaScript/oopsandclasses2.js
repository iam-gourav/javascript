// object literal

// ex:-
// const user = {
//     username:"Gourav",
//     signedId:true,
//     loginCount:8,
//     getUserDetails:function(){
//         // console.log("Got user details");
//         // console.log(`username ${username}`);

//         // we use this keyword here
//         // console.log(`username ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.getUserDetails());

// output:- Got user details

// console.log(user.getUserDetails());

//this.username gives error username is not defined

// this keyword gives you the current context

// {
//     username: 'Gourav',
//     signedId: true,
//     loginCount: 8,
//     getUserDetails: [Function: getUserDetails]
//   } 


// constructor function

// const promiseone = new Promise((resolve, reject) => {
    
// })

// new keyword is user to create new context that's called constructor function

function user(username , loginCount , isLoggedIn){
    // username = username
    // here left side username is a variable or right side username is value
    // here confusion is create which username is a variable or value
    // myusername = username
    // here we can compare myusername is a variable and username is a value

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log("hello "+this.username);
    }

    // return this
    //you can write return this or not
}

let userOne = new user('Gourav' , 11 , true )
let userTwo = new user('Gourav sharma' , 1 , false)
// console.log(userOne);
// console.log(userOne.constructor);
// // console.log(userTwo);

// console.log(userOne.constructor);
// it referance of itself
//[Function: user]


// when we have userOne and userTwo 
// userOne gives userTwo value it gives only last instance value 
// constructor function gives a new instance always to use constructor function we use new keyword

// when we use new keyword firstly it create an empty object that's called instance
// step1:- it create new object
// step2:- constructor function always called with new keyword
// step3:- all the argument passed inject in constructor function
// step4:- get all the argunment in the constructor function


// instanceof

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true

  // auto is instanceof car
  
  console.log(auto instanceof Object);
  // Expected output: true

  

   // Expected output: true


//   syntax :- object instanceof constructor

// instanceof classes

class A {}
class B extends A {}

const o1 = new A();
// true, because Object.getPrototypeOf(o1) === A.prototype
o1 instanceof A;
// false, because B.prototype is nowhere in o1's prototype chain
o1 instanceof B;

const o2 = new B();
// true, because Object.getPrototypeOf(Object.getPrototypeOf(o2)) === A.prototype
o2 instanceof A;
// true, because Object.getPrototypeOf(o2) === B.prototype
o2 instanceof B;