// class Book {
//   constructor(title, author, genre, available) {
//     this.title = title;
//     this.author = author;
//     this.genre = genre;
//     this.available = available;
//   }
//   getDetails() {
//     `${this.title}nomli kitob  mulalifi${this.author} va janri ${this.genre} va kitob xonada ${this.available}`;
//   }
//   markAsBorrowed() {
//     this.available
//       ? console.log("hali olib ketilmagan")
//       : console.log("kitob topilmadi");
//   }
//   markAsReturned() {
//     this.available ? console.log("qaytarilgan") : console.log("olib ketilgan");
//   }
// }
// const book1 = new Book("bobur noma", "bobur", "ilmiy", true);
// console.log(book1);

// class Library extends Book {
//   books = ["temurnoma"];
//   constructor(title, author, genre, available, books) {
//     super(title, author, genre, available);
//     this.books = books
//   }
//   addBook(add) {
//     return (this.books += " " + add);
//    }
//   removeBook(remove) {
//     // this.books.map((value)=> value === remove ? value : "u" )
//   }
// }
// const book2 = new Library("navoiy noma", "navoiy", "ilmiy", true);
// // book2.addBook("hokazo");
// // console.log(book2.addBook("nimadur"));
// // books.removeBook("temurnoma")

class Bus {
  seats = 0
  constructor(id, route, seats, reservedSeats) {
    this.id = id;
    this.route = route;
    this.seats = seats;
    this.reservedSeats = reservedSeats;
  }
  getDetails() {
    console.log(
      `${this.id} raqmli  Avtobus Yo‘nalish ${this.route}   ornilari ${this.seats}  band joylar ${this.reservedSeats}`
    );
  }
  cancelReservation(cancel){
   
    console.log( this.seats > cancel ? this.seats += cancel : "Band qilib bolmaydi "
    )
  }
  reserveSeat(seat){
    console.log( this.seats > seat ? this.seats -= seat  :"joy toldi  "
    )
  }
  
}
const bus1 = new Bus(1, "Toshkent - Samarqand", 10, 5);
const bus2 = new Bus(2, " Samarqand - Toshkent", 15, 5);
// console.log(bus2.cancelReservation(1));
// console.log(bus2.reserveSeat(13));
// console.log(bus2);


// class BusSystem extends Bus {
//   buses = []
//   addBus(...newbus){
//    console.log(this.buses = [...this.buses,newbus])
//     }
// listBuses(){
//   console.log(this.buses)
// }
// searchByRoute(Yonalish){
//   console.log( this.route == Yonalish ? this.buses : "unaqasi yoq")
// }
// }
// const bus3 = new BusSystem(2, " Samarqand - Toshkent", 15, 5);
//  console.log(bus3)
// bus3.addBus(2, " Samarqand - Toshkent", 15, 5)
// bus3.addBus(3, " Samarqand - Toshkent", 19, 5)




