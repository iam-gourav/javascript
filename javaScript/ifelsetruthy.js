// if - else

// falsy values 

// false , 0 , -0 , bigInt 0n , "" , null , undefined , Nan

// truthy values

// true , 1 , "0" , "false" , " " ,[] , {} , function(){}

//false==0
//true

// false==0
// true

// 0==""
// true

// nullish coalescing operator (??) : null undefined

let val;

val = 5 ?? 10
// 5

val = null ?? 10
//10

val = undefined ?? 20
//15

val = null ?? 12 ?? 15
// pick first value 

console.log(val);