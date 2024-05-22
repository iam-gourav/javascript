function SetUsername(username){
    this.username = username;
    console.log(username);

}

// SetUsername("Subh")

// output:- subh

// what if we call SetUsername inside a function than 

function CreateUser(username , email , password){

    
    SetUsername.call(this , username)
    this.email = email
    this.password = password
}

let user1 = new CreateUser("Aman" , "Aman@gmail.com" , "123")

console.log(user1);

// output:- CreateUser { email: 'Aman@gmail.com', password: '123' }
// but username not here
// if we put console.log in Setusername it will print but not set username
// this happens because when Setusername call it works but after call this variable will be empty after call it's execution context will remove
// for hold the username we use call("this" , username)
// username is value you pass in Setusername
// and this referce to that function execution context where you call Setusername
// here this not take refernce of Setusername it takes the reference of CreateUser 

// call work with this keyword