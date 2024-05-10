function myFunc(num){
    // properties
    // Ex:- this.num = num
    this.num = num
    return num*5
}

myFunc.power = 2;

console.log(myFunc(5));
// 25
console.log(myFunc.power);
// 2
console.log(myFunc.prototype);
// {}
// it always empty because it takes reference of properties 
// reference of this.num will store in myFunc.prototype

function createUser(username , score){
    // username = username it confuse username is a variable or value so we use this keyword
    // that create current context

    this.username = username;
    this.score = score;

    

}