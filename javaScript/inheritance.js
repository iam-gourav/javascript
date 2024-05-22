class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , email , password){
        // User.call(this , username)
        // in functions we need call keyword to set the username but in classes we have spuer keyword
        // under the hood super keyword take care of this keyword and much more
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`new courses is added by ${this.username}`);
    }
}
// here Teacher inherit the properties and methods of User


let teacher1 = new Teacher("jsTeacher" , "xyz@gmail.com" , "123")
let teacher2 = new User("reactTeacher")

// console.log(teacher1.addCourse());
// output:-new courses is added by jsTeacher

// console.log(teacher1===teacher2);
// output:- false

// console.log(teacher1===Teacher);
// output:- false
// bcz teacher1 takes the instance of Teacher

// console.log(teacher2.addCourse());
// error teacher2.addCourse is not a function
// bcz Teacher inherit User not User inherit Teacher


// console.log(teacher2.logMe())
// output:- USERNAME is reactTeacher


// console.log(teacher1.logMe())
// output:- USERNAME is jsTeacher

// console.log(teacher2 instanceof User);
// output:- true
// console.log(teacher2 instanceof Teacher);
// output:- false


console.log(teacher1 instanceof User);
// output:- true
console.log(teacher1 instanceof Teacher);
// output:- ture


