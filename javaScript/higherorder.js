// for of loop

// const arr = [10 , 20 , 30 , 40 , 50];

// for (const elem of arr) {
//     console.log(elem);
    
// }

//output
// 10
// 20
// 30
// 40
// 50

// const msg = "hello world!"

// for (const elem of msg) {
//     console.log(elem);
// }

//output
// h
// e
// l
// l
// o

// w
// o
// r
// l
// d
// !

// const map = new Map()

// map.set("city1" , "delhi")
// map.set("city2" , "mumbai")
// map.set("city3" , "fbd")

// to access keys of map 
// for (const key of map.keys()) {
//     console.log(key);
//    }
    // city1
    // city2
    // city3
// to access values of map 
// for (const value of map.values()) {
//     console.log(value);
//     }
    // delhi
    // mumbai
    // fbd

// to access both keys and values of map 
// for (const [key , value] of map) {
//     console.log(`${key} is ${value}`);
//     }
    // city1 is delhi
    // city2 is mumbai
    // city3 is fbd


// object iteration 

// let obj = {
//     city1:"delhi",
//     city2:"mumbai",
//     city3:"fbd"
// }

// for (const key of obj) {
//     console.log(key);
// }

// object iteration not possible by for of loop

// for (const key in obj) {
//    console.log(key);
// }
// gives all keys 
// city1
// city2
// city3
// for (const value in obj) {
//    console.log(value);
// }
//same as gives all keys

// to get the value of obj

// for (const key in obj) {
//    console.log(`${key} is ${obj[key]} `);
        
   
// }
// city1 is delhi
// city2 is mumbai
// city3 is fbd

// for (const [key,value] in obj) {
//     console.log(`${key} is ${value} `);
         
    
//  }
//  c is i
// c is i
// c is i
//for in loop only gives keys and destructuring not allowed

// let arr = [10 , 20 , 30];
// for (const key in arr) {
//         console.log(key);
        
//     }
    // also work on arr
    // const  myMap2 = new Map()
    // myMap2.set("a" , 1)
    // myMap2.set("b" , 2)
    // myMap2.set("c" , 3)

    // for (const key in myMap2) {
    //    console.log(key);
    // }

    // not work on map 


    let arr = [10 , 20 , 30]

    arr.forEach((item ,  index , arr ) => {
        console.log(item , index , arr);
    });