//**********iife***********************/
// immediately invoked function expressions

// function dbConnection(){
//     console.log(`db connection`);
// }
// dbConnection()

//iife syntax

// (function dbConnection(){
//     console.log(`db connection`);
// })()

// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// Avoiding Global Pollution. By encapsulating code within IIFE, you avoid polluting the global namespace.

// (function dbConnection(){
//     console.log(`db connection`);
// })();
// // it gives error in this first function not end so you have apply ; at the end of iife function
// (()=>{
//     console.log(`db connection`)
// })()

// parameters in iife
((port)=>{
    console.log(`db connection at port ${port}`)
})(4000)