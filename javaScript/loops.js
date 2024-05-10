//****************for loop************************/

for (let i = 1; i <=10; i++) {
    const element = i;
    if(i==5){
        console.log("detected 5");
        break;
    }
    console.log(element)
    
}

// console.log(element);
// not accessible outside the loop because of scope
// console.log(i);
// not accessible outside the loop because of scope

// for (let i = 1; i <=10; i++) {
//     const element = i;
//     if(i==5){
//         console.log("detected 5");
//         continue;
//     }
//     console.log(element)
    
// }

//*******************while loop**************************/


// let i = 0;
// while (i<=10) {
//     console.log(`value of i ${i}`);
//      i = i+2
// }


//*****************do-while loop************************/


let score = 11;
do {
   console.log(`score is ${score}`); 
   score++
} while (score<=10);