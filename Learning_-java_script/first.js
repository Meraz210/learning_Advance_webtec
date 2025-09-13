console.log('Welcome to my page.');
console.log('This is the first.js file.');
console.log('Enjoy your stay!');
console.log('Goodbye from first.js!');
console.log('This is the end of first.js.');
console.log('Thank you for visiting!');
console.log('See you next time!');
console.log('Have a great day!');
console.log('Stay safe and healthy!');
console.log('Keep coding and learning!');

let fullname1 = "John Doe";
console.log(fullname1);

let age1 = 24;
console.log(age1);

let x = null;
console.log(x);

let y;
console.log(y); // undefined

let isFollowing = false;
console.log(isFollowing);

let isLoggedIn = true;
console.log(isLoggedIn);

let fullname2 = "Jane Smith";
console.log(fullname2);

let ages = 30;
console.log(ages);

const constAge = 28;
console.log(constAge);

let a;
a = 10;
console.log(a);

{
  let b = 20; // block scoped
  console.log(b);
}

// ✅ Object 1: Student
const student = {
  name: "Alice",
  age: 22,
  isEnrolled: true
};
console.log(student);
console.log("Student Name:", student.name);

// ✅ Object 2: Car
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2024,
  color: "Blue"
};
console.log(car);
console.log(`Car Info: ${car.brand} ${car.model} (${car.year})`);

// ✅ Object 3: Book with nested object
const book = {
  title: "JavaScript Essentials",
  author: {
    firstName: "Mark",
    lastName: "Lee"
  },
  pages: 350,
  isPublished: true
};
console.log(book);
console.log("Book Author:", book.author.firstName, book.author.lastName);

// ✅ Object 4: Array inside an object
const person = {
  name: "Charlie",
  hobbies: ["Coding", "Reading", "Traveling"]
};
console.log(person);
console.log("Hobbies:", person.hobbies.join(", "));
