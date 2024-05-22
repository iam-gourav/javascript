class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static createId(){
        return `id ${this.username}123`
    }
}

let user1 = new User("gourav")
console.log(user1.createId());
// error user1.createId is not a function

// static keyword stop to get the access of createId

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email =email
    }
}

const teacher1 = new Teacher("js teacher" , "xyz@gmail.com")

console.log(teacher1.createId());
// error user1.createId is not a function