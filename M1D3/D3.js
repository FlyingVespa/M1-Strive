/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.

*/

/* WRITE YOUR CODE HERE */
console.log("----------------------------> 1")
let positiveNum = [1, 2, 3, 4, 5];
console.log(positiveNum);


/* EXERCISE 2
Create an object containing your name, surname, email address and age.*/
/* WRITE YOUR CODE HERE */
console.log("----------------------------> 2")


let meMyself = {
    name: "Hedri",
    surname: "Nel",
    email: "unknown@gmail.com",
    age: 29
};
console.log(meMyself)

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
/* WRITE YOUR CODE HERE */
console.log("----------------------------> 3")

meMyself.license = true;
console.log(meMyself);

/* EXERCISE 4
Remove from the previously created object the age property.
*/
/* WRITE YOUR CODE HERE */
console.log("----------------------------> 4")
delete meMyself.age;
console.log(meMyself)


/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR CODE HERE */
console.log("----------------------------> 5")
let newUser = {};
Object.assign(meMyself, newUser);
newUser.email = 'realmail@gmail.com';

if (newUser.email == meMyself.email) {
    console.log("emails match")
} else {
    console.log("emails dont match");
}

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR CODE HERE */
console.log("----------------------------> 6")

let totalShoppingCart = 30;
if (50 > totalShoppingCart) {
    totalShoppingCart += 10
};

console.log(totalShoppingCart);

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR CODE HERE */
console.log("----------------------------> 7")
totalShoppingCart = 50;
let discount = totalShoppingCart * 0.8;
if (50 > discount) {
    discount += 10;
    console.log("Price was under 50, so shipping was added")
} else {
    discount = ((totalShoppingCart) * 0.8)
    console.log("Price after discount was more than 50, thus free shipping");
}
console.log(totalShoppingCart);

// this execrise can be interpretated differently, but according to me eccomerse exp this is how discounts are applied.

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let car = {
    brand: 'Ford',
    model: '556',
    licensePlate: 55554,
}
console.log(car);

for (let i = 1; i < 6; i++) {
    let car1 = Object.assign({}, car);
    car1.licensePlate += i
    console.log(car1);
};

/* WRITE YOUR CODE HERE */
console.log("----------------------------> 8")

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* WRITE YOUR CODE HERE */
console.log("----------------------------> 9")
let carsForRent = car1;
console.log(car);
/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
//carsForRent.pop();
//carsForRent.shift();
/* WRITE YOUR CODE HERE */
console.log("----------------------------> 10")

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

/* WRITE YOUR CODE HERE */
console.log("----------------------------> 11")

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */
console.log("----------------------------> 12")
/*
let carsForSale = ['red','blue','green'];
let totalCars = (carsForRent.length + carsForRent.length);
console.log(totalCars)*/

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
//console.dir(carsForSale)

/* WRITE YOUR CODE HERE */
console.log("----------------------------> 13")

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/