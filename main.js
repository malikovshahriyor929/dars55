// class Home {
//   constructor(width, heigth, people, color) {
//     this.width = width;
//     this.heigth = heigth;
//     this.people = people;
//     this.color = color;
//   }
//   about() {
//     return `uyning eni ${this.width / 100} va uning boyi ${
//       this.heigth / 100
//     } va rangi ${this.color}`;
//   }
//   kv() {
//     const h = this.heigth / 100;
//     const w = this.width / 100;
//     return `${w * h}kv`;
//   }
// }
// const home1 = new Home(220, 300, 2, "blue");
// const home2 = new Home(110, 400, 3, "yellow");
// // console.log(home1);
// // console.log(home2);
// // console.log(home1.about());
// // console.log(home2.about());
// // console.log(home1.kv());
// // console.log(home2.kv());

// class Uchaska extends Home {
//   constructor(width, heigth, people, color, garden, price) {
//     super(width, heigth, people, color);
//     this.garden = garden;
//     this.price = price;
//   }
//   pricesum() {
//     let sum = 12900;
//     return this.price * sum;
//   }
//   about() {
//     return super.about() + `uy narxi ${this.pricesum()} va uning bogi`;
//   }
// }
// const uchaska1 = new Uchaska(300, 300, 3, "dark", 2, 20000);

// // console.log(uchaska1);
// // console.log(uchaska1.pricesum());
// // console.log(uchaska1.about());
// // console.log( uchaska1 instanceof Uchaska)

// // class Mathobj {
// //     static PI = 22
// //     static pow(a,b){
// //       return a ** b
// //     }
// //  }
// //  console.log(Mathobj.pow(3,2))

// // class User {
// //   username;
// //   #password;
// //   constructor(username, password) {
// //     this.username = username;
// //     this.#password = password;
// //   }
// //   set changePassword([password, newpassword]) {
// //     if (password === this.#password) {
// //       this.#password = newpassword;
// //       console.log(`parolingiz ${newpassword}`);
// //     } else {
// //       console.log("hato");
// //     }
// //   }
// //   set getUser([username, password]) {
// //     if (username === this.username && password === this.#password) {
// //       console.log(
// //         `xush kelib siz ${this.username} paswordingiz ${this.#password}`
// //       );
// //     } else {
// //       console.log("nimadur xato");
// //     }
// //   }
// // }
// // const user1 = new User("holimjon", "holim0101");
// // user1.changePassword = ["holim0101", "holim0110"];
// // user1.getUser = ["holimjon", "holim0110"];

// class Bank {
//   owner;
//   balance = 0;
//   constructor(owner, balance) {
//     this.owner = owner;
//     this.balance = balance;
//   }
//   balances(newsum) {
//     this.balance += newsum;
//     return `balsingizda ${this.balance} va shuncha pul tushdi ${newsum}`;
//   }
//   usebalance(usesum) {
//     if (usesum > this.balance) {
//       console.log("mablag yetarlimas");
//     }
//     this.balance -= usesum;
//     return `balsingizda ${this.balance} va shuncha pul ishlatildi ${usesum}`;
//   }
// }
// let bank1 = new Bank("aziz", 200);
// let bank2 = new Bank("aziza", 200);
// // console.log(bank1.balances(100))
// // console.log(bank2.balances(200))
// // console.log(bank1.usebalance(100))
// // console.log(bank2.usebalance(400))

// class Animal {
//   constructor(name, species, diet) {
//     this.name = name;
//     this.species = species;
//     this.diet = diet;
//   }
//   getDetails() {
//     return `${this.name} nomli hayvon ${this.species} turdagi hayvon ${this.diet} turiga kiradi`;
//   }
// }
// const animal1 = new Animal("horsexon", "ot", "o'txor");
// const animal2 = new Animal("sherxon", "sher", "go'shxor");
// const animal3 = new Animal("tigerxon", "tiger", "go'shxor");
// const animal4 = new Animal("rex", "dog", "go'shxor");
// const animal5 = new Animal("qoyxon", "qoy", "o'txor");

// // console.log(animal1.getDetails())

// class User {
//   constructor(username, email, role) {
//     this.username = username;
//     this.email = email;
//     this.role = role;
//   }
//   getInfo() {
//     `mening ismim ${this.username} va mening emaillim ${this.email} va univerda ${this.role}chiman`;
//   }
// }

// const student1 = new User("olim", "olim@gmail.com", "student");

// class Student extends User {
//   course = [];
//   constructor(username, email, role, course) {
//     super(username, email, role);
//     this.course;
//   }
//   enrollcourse(newcouse) {
//     if (!this.course.includes(newcouse)) {
//       this.course += newcouse;
//       console.log(`Kurs qoshldi ${newcouse}`)
//     } else {
//       console.log(`oldin shu ${newcouse}ga qoshilgansiz`);
//     }
//   }
//   listCourses(){
//     this.course.forEach(value =>{
//      console.log(value)
//     })
//   }
// }
// class teacher extends User {
//   course = [];
//   constructor(username, email, role, course) {
//     super(username, email, role);
//     this.course;
//   }
//   cratecourse(newcouse) {
//     if (!this.course.includes(newcouse)) {
//       this.course += newcouse;
//       console.log(`Kurs kurs xoshdingiz ${newcouse}`)
//     } else {
//       console.log(`oldin shu ${newcouse}ga qoshilgansiz`);
//     }
//   }
//   listCourses(){
//     this.course.forEach(value =>{
//      console.log(value)
//     })
//   }
// }

// let student2 = new Student("olimjon","hadcdb","Student",0)
// console.log(student2)
// console.log(student2.enrollcourse("Math"))
// console.log(student2.listCourses())

// let nums = [3, 1, 2, 4];
//   let even = []
// let odd = []
// for (let i = 0; i < nums.length; i++) {
//   nums[i] % 2 == 0 ? (even += nums[i]) : (odd += nums[i]);
// }
// let res = even + odd;
// console.log(res);

// let data = [
//   {
//     id: 1,
//     name: "Aharlie",
//     age: 20,
//   },
//   {
//     id: 3,
//     name: "Cax",
//     age: 35,
//   },
//   {
//     id: 2,
//     name: "Bob",
//     age: 25,
//   },
 
// ];

// function search(arr2, cate) {
// let newarr = arr2.sort((a,b)=>{
//   // console.log(a)
//   // console.log(b)
  
//   // return  ? (a[cate] - b[cate]): a[cate].localeCompare(b[cate])
// // return a[cate] - b[cate]
// })
// return newarr
// }
// console.log(search(data,"id"));

