
//*****************  Map  ***********************/
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const myMap = new Map( );


// myMap.set("a" , 1); //key as string and value as number
// myMap.set(2 , 1); //key as number and value as number
// myMap.set(3 , "c"); //key as number and value as string

// myMap.set(3 , "d"); //key as number and value as string
// // this change key 3 value "d"
// myMap.set(3 , "c"); //key as number and value as string

// //not take duplicate values

// console.log(myMap.get(3));

// const obj = {
//     name1:"Tony",
//     movie:"ironman"
// }
// obj.name1 = "stark"
// myMap.set("myobj" , obj)
// // store reference of obj if any changes occures in obj myMap also change
// myMap.set("myobj" , obj.movie = "avengers")
// // if any changes occures in myMap obj also change
// console.log(myMap);
// console.log(obj);

// map methods in js

const myMap2 = new Map()

//1. set:- method to set the values in map

myMap2.set("a" , 1)
myMap2.set("b" , 2)
myMap2.set("c" , 3)
console.log(myMap2);

//2. get:- to get the value of any key
console.log(myMap2.get("b"));
// 2

//3. size:-to get the size of map

console.log(myMap2.size);
// 3

//4. has :- to check the value exists in map or not (boolean)

console.log(myMap2.has("b"));
//true

//5. delete:- to delete 

// console.log(myMap2.delete("c"));
//true 
console.log(myMap2);
// delete key c
//Map(2) { 'a' => 1, 'b' => 2 }

//6. myMap2.clear()
// delete all map elements
console.log(myMap2);
// Map(0) {}

// 7. keys :- gives objects of all keys
console.log( myMap2.keys());
//[Map Iterator] { 'a', 'b', 'c' }


// 8. values :- gives objects of all values
console.log( myMap2.values());
// [Map Iterator] { 1, 2, 3 }