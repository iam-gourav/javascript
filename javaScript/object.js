// declearation of objects

//singleton

//object literals
// let jsUser = {}
//that's called object literal in this case object will not be singleton

// Object.create()
//through constructor object will be singleton

// const jsUser = {
//     name : "gourav",
//     "full name": "goga sharma",
//     age : 27 , 
//     email : "goga@gmail.com"
// }
// behind the scene key is string
//how to access objects
// console.log(jsUser.name)
// console.log(jsUser["name"])
// can't access full name key with . property

// console.log(jsUser["full name"]);

//****************** */
// symbols in js

// let mysym = Symbol("key1")
// // console.log(typeof mysym)
// const jsUser = {
//     name : "gourav",
//     "full name": "goga sharma",
//     [mysym] : "key10",  // symbol use in [ ] brackets
//     age : 27 , 
//     email : "goga@gmail.com"
// }

// console.log(typeof jsUser[mysym]) 
// console.log(jsUser) 
//access the symbol

// jsUser.email = "gogaamazon@gmail.com";
// console.log(jsUser.email)
// change the value of email

// Object.freeze(jsUser)
// jsUser.email = "gogafacebook@gmail.com";
// console.log(jsUser.email)

//now you can't change email

// console.log(Object.isFrozen(jsUser))  
// true

// let myobj = {
//  
// }
// myobj.greeting = function(){
//     console.log("hello js !")
// }

// console.log(myobj.greeting() )

// nested object 
//  let user = {
//     email:"goga@gmail.com",
//     fullname:{
//         username:{
//             firstname:"goga",
//             lastname:"sharma"
//         }
//     }
//  }
//  console.log(user.fullname.username.firstname)
//  console.log(user?.fullname?.username?.firstname)
 //optional chaining

// combine or merge objects
 let obj1 = {
    1:"a",
    2:"b"
 }
 let obj2 = {
    3:"c",
    4:"d"
 }

//  let obj3 = {obj1 , obj2}
//  console.log(obj3);
 // output { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//  Object.assign(target , sources)
// it will assign all sources in target object 
//  let res = Object.assign(obj1 , obj2);
//to merge object

// let res = Object.assign({} , obj1 , obj2);
// // takes 
//  console.log(res)

// let res = {...obj1 , ...obj2}
// console.log(res)


// object methods 
// let instaUser = {
//     email:"hi@gmail.com",
//     isLooged:true,
//     name:"gourav"
// }
// console.log(Object.keys(instaUser))
// it gives an array of keys
// console.log(Object.values(instaUser))
// it gives an array of values
// console.log(Object.entries(instaUser))
// output [
//   [ 'email', 'hi@gmail.com' ],
//   [ 'isLooged', true ],
//   [ 'name', 'gourav' ]
// ]
// console.log(Object.hasOwnProperty("name"))
// true


let course = {
    courseInstructor:"gourav sharma",
    coursePrice:999,
  
}
// console.log(course.courseInstructor)
// output gourav sharma
// let {courseInstructor }= course
// console.log(courseInstructor)
// output gourav sharma
// let {courseInstructor :instruc }= course
// console.log(instruc)
// output gourav sharma
