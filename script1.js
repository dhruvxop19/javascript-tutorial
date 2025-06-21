let user1 = {
	name: "Dhruv",
	age: 19 , 
    gender: "male"
}

console.log("Dhruv's age is " + user1.age);
console.log (user1.name);
console.log (user1.gender)



function greet(user1){
    console.log ("Hii Mr " + user1.name + " your age is " + 19);
}
greet(user1);

let arr =["Dhruv",19,{
    Name : "Dhruv" ,
    Age : 19
}] ;

console.log ( arr[2]);



function getAdultMales(users) {
  return users.filter(user => user.gender === 'male' && user.age > 18);
}

const users = [
  { name: 'Alice', age: 17, gender: 'female' },
  { name: 'Bob', age: 20, gender: 'male' },
  { name: 'Charlie', age: 18, gender: 'male' },
  { name: 'David', age: 22, gender: 'male' },
];

const result = getAdultMales(users);
console.log(result);