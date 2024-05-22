// syntax of classes 

class User{
    // in classes we need constructor 
    constructor(userName , email ,password){
        this.userName = userName;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

let user1 = new User("Rohan" , "rohan@gmail.com" , "1234")

// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());

//if we have no classes how javaScript works

function CreateUser(userName , email , password){
    this.userName = userName;
    this.email = email;
    this.password = password
}
CreateUser.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
CreateUser.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

let user2 = new CreateUser("Aman" , "Aman@gmail.com" , "Aman1234")
console.log(user2);

console.log(user2.encryptPassword());
console.log(user2.changeUserName());