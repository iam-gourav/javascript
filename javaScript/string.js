// how to create a string 

//let str = "this is first way";

//let str2 = 'this is second way'

//let str3 = String("this is third way");

//let str4 = new String("this is the fourth way");

// let str = "hello";
// let str2 = "hello";
// let str3 = String("hello");
// let str4 = new String("hello")

// console.log(str==str4)
//true
// console.log(str==str4)
// false

// when we compair str4 with any other string == gives true
// and === gives false

// strings methods
let str = "this is a string";
console.log(str.length)
//16
console.log(str.toUpperCase())
// THIS IS A STRING
console.log(str.toLowerCase())
//this is a string
console.log(str.at(3 ))  
// s
console.log(str.charCodeAt(1)) 
// takes index number 
// which means ASCII value of a

// concat , startswith , endswith , include

console.log(str.indexOf("a"))
// gives the index no. of a
console.log(str.lastIndexOf("t"))
// gives the index no. of t from the last

console.log(str.substring())