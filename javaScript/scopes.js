// scopes in js 
//global scope
// let a = 300
// {
//     // block scope 
//     let a = 10;
//     const b = 20;
//     var c = 30;
//     console.log(a)
//     // 10
    
// }

// because of block level scope 
// console.log(a)
// a is not defined it's not access outside the scope

// console.log(b)
// b is not defined it's not access outside the scope

// console.log(c)
// 30 it can be access outside the scope

// global scope 
// var keyword scope
// var c = 200;

// {
    // block scope 
    // console.log(c);
    //200 it can access global variable
  
    // var c = 30;
    // console.log(c)
    // 30 it gives block variable
    
// }
// console.log(c);
// 30
//****block level variable c change the global variable c's value

// let scopes

// let a = 100;

{
    // console.log(a)
    //cannot access "a" before initialization
    // let a = 20
    // console.log(a)
    // 20 block variable
    //can't change global variable a
}
// console.log(a)
//100
// gives the value of global variable

// function one(){
    // const username = "gourav"

    // function two(){
        // const website = "point"
        // console.log(username)
        // gourav
        // child can access parent variables
    // }
    // but parent can't access child variable
    // console.log(website)
    //  website is not defined
    // if you declear a variable inside a function you can't access 
    // that variable outside the function
    // two()
// }
// one()

// if(true){
//     const username = "gourav"
    
//     if(username==="gourav"){
//         const website = "point";
//         console.log(username + website);
//     }
    // console.log(website);
    // website is not defined
    // can't access website outside
// }
// console.log(username);
// username is nnot defined
    // can't access username outside


    // console.log(addone(8))
    //8
    // this function can be call here
    // function addone(num){
    //     return num+1;
    // }


    // addtwo(6)
    // Cannot access 'addtwo' before initialization
    //it's called hoisting
    // when you call a function before declearation


    //**************hoisting in js*************************/
    
    const addtwo = function(num){
        return num+2
    }