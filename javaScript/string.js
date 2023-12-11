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
// console.log(str.length)
//16
// console.log(str.toUpperCase())
// THIS IS A STRING
// console.log(str.toLowerCase())
//this is a string
// console.log(str.at(3 ))  
// s
// console.log(str.charCodeAt(1)) 
// takes index number 
// which means ASCII value of a

// concat , startswith , endswith , include , trim , trimStart , trimend

// console.log(str.indexOf("a"))
// gives the index no. of a
// console.log(str.lastIndexOf("t"))
// gives the index no. of t from the last

// console.log(str.substring(0,4))
// this

// console.log(str.replace("this" , "that")) 
// replace this from that
// replaceAll replace all this words to that

// console.log(str.repeat(3))
// repeat the string 3 times
// let data = str.split("")
// console.log( data)
// [
//     't', 'h', 'i', 's',
//     ' ', 'i', 's', ' ',
//     'a', ' ', 's', 't',
//     'r', 'i', 'n', 'g'
//   ]

// console.log(typeof data)
// object
// let data2 = str.split(" ")
// console.log(data2)
// [ 'this', 'is', 'a', 'string' ]

// let data3 = str.split() 

// console.log( data3)
// [ 'this is a string' ]

// console.log( typeof data3)
// object

// console.log(str.substring(0 , 7 ))
// it takes start to end index no.
// you can't pass negative values

// console.log(str.slice(-1 , -8))
// this start index 0 to 3

// let data = "123"
// console.log(data.padEnd(5 , "0"))
// 12300
// console.log(data.padStart(5 , "*"))
//**123