// function greet(){
//     console.log("hello")
// }

// greet();
//function execution
// greet
//function referance

// function sum(num1 , num2){
//     console.log(num1+num2)
// }
// sum(2,4)
// output 6

// let result =  sum(3,5)
// console.log(result)
//undefined
// function sum(num1 , num2){
//     return num1+num2
    //after result code can't executed
    // console.log("hello")
// }
// let result1 =  sum(3,5)
// 8
// let result1 =  sum()
//Nan
// console.log(result1)
// result takes return value
// code below return not executed

// function loginUserMsg(username = "user" ){
//         if(!username){
//             console.log('please enter your name');
//             return;
//         }
//         else{

//             return `${username} is logged in`
//         }

// }

// console.log(loginUserMsg("gourav"))
// undefined

// !username means username === undefined
// convert true to false or false to true
// empty string and undefined means false

//*********functions with object and arrays************* */

// function calculateCartPrice(...rate){
//     return rate;
// }

// console.log(calculateCartPrice(200 , 300 , 500))
//200
// using rest operator for multiple arguments
// rest operator gives an array


// function calculateCartPrice2(val1 , val2 , ...rate){
//     return rate , val1 , val2  ;
// }

// console.log(calculateCartPrice2(200 , 300 , 500 , 800))
// [ 500, 800 ]
// return last variable
// if return val1 , val2
// 300

//***********objects in function***********/
let user = {
    name:"gourav",
    price: 499
}
function handleObj (anyObj){
return `username ${anyObj.name} bill is ${anyObj.price}`
}
console.log(handleObj(user))
// username gourav bill is 499
console.log(handleObj({name:"me",price:345}))
//username me bill is 345

//************array in function**************** */

let arr =[10 , 20 , 30 , 40];

function getValue(anyArray){
        return anyArray[1]
}

console.log(getValue(arr));
//20