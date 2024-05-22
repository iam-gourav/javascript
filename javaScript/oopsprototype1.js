function myFunc(num){
    // properties
    // Ex:- this.num = num
    this.num = num
    return num*5
}

myFunc.power = 2;
// it means all the thing in js are objects
// we says that myFunc object have key power and it's value is 2

// console.log(myFunc(5));
// 25
// console.log(myFunc.power);
// 2
// console.log(myFunc.prototype);
// {}
// it always empty because it takes reference of properties 
// reference of this.num will store in myFunc.prototype

function createUser(username , score){
    // username = username it's confuse username is a variable or value so we use this keyword
    // that create current context

    this.username = username;
    this.score = score;

    

}

createUser.prototype.increment = function(){
    this.score++
    // this means jisse 
    // jisne bhi bulaya hai uske pass jao
    // if me called createUser than createUser goes to me and also for you and so on
    // for current context
}
createUser.prototype.printMe= function(){
    console.log(`score is ${this.score}`);

}

// const me = createUser("Gourav" , 78)
// TypeError: Cannot read properties of undefined (reading 'printMe')
// you.printMe()
// when you go in createUser it have properties increment and printMe
// for this we use new keyword
const me = new createUser("Gourav" , 78)
const you = new createUser("Subh" , 67)

you.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/