// declearation of an array

// let arr = [10 , 20 , 30 , true , "gourav"]

// let arr1 = new Array(10 );
// it's define the length of an array

// let arr2 = new Array(10 , 20)
// it create array of two element 10 , 20
// let arr2 = Array(10 , 20)
// console.log(arr2)

// array methods 
// arr.push(5)  add the value at the end of an array 
// arr.pop()  remove the value at the end of an array 

// arr.unshift(8) add the value at the start of an element
// ***** but it shift all the array values********

// arr.shift() remove the value at the start of an element

//  console.log(arr.includes(10))
//  check the 10 in an array and gives boolean value

//  console.log(arr.indexOf(10))
//  check the 10 in an array and gives index number

// arr.join()
// bind all the array elements into string join("-")
//typeof string 

// arr.slice(startindex , endindex)
// let arr1 = [10 , 20 , 30 , 40 , 50];
// console.log(arr1.slice(1 , 3))
// console.log(arr1)

// it start from start index no. gives to value 1 and 2 
// 3 is not included or(lastindex-1)

// arr.splice(startindex , numberofitemremove , additem1 , additem2 upto so on)
// let arr1 = [10 , 20 , 30 , 40 , 50];
// console.log(arr1.splice(1 , 3 , 90))
// console.log(arr1)
// start index no 1 and remove 3 elements 
// start the adding elements at the last index no. of romove element 
// it's change original array

let marverHeros = ['ironman' , 'thor' , 'hulk'];

let dcHeros = ["batman" , "superman"];

// marverHeros.push(dcHeros)
// console.log(marverHeros[3][1])

// it push dcHeros array into marvelHeros array
// output :- ['ironman' , 'thor' , 'hulk' , ["batman" , "superman"]]

// let allHeros = marverHeros.concat(dcHeros)
// console.log(allHeros)
// it merge dcHeros array with marvelHeros and return new array

// spread operator 
// let allHeros = [...marverHeros , ...dcHeros]
// console.log(allHeros)
// it spread array's indiviual element
// gives same result like concat

let alphaArr = ['a' , 'b' , 'c', ['d' , 'e'] , 'f' , ['g' , 'h' , ['i' , 'j']]]
let realArr = alphaArr.flat(Infinity)
console.log(realArr);
//flat(depthvalue)
// if depth value 1 it flats direct child array 
// if depth value 2 it flats direct child array and also grand child array 
// if depth value infinity flats all inner arrays elements


// console.log(Array.isArray(realArr))
// true

// console.log(Array.isArray("gourav"))
// false
//but want to make this an array
// console.log(Array.from("gourav"))  // read more
// output :- [ 'g', 'o', 'u', 'r', 'a', 'v' ]

console.log(Array.of(7 , 2 , 3));
// create a new array

console.log(Array.of(7));
// create a new array with single element 7 

console.log(Array(7));
// create an array length 7
