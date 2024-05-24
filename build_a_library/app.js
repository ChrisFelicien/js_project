class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  //   set checkedOut
  set isCheckedOut(newVal) {
    return (this._isCheckedOut = newVal);
  }

  toggleCheckOutStatus() {
    return (this._isCheckedOut = !this._isCheckedOut);
  }

  addRating(val) {
    return this._ratings.push(val);
  }

  getAverageRating() {
    const sumRating = this._ratings.reduce(
      (currentSum, rating) => (currentSum += rating),
      0
    );

    return sumRating / this._ratings.length;
  }
}
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }

  //
}

//
//

class Movies extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
}
class CD {}

// create Book

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

// create Movie instance

const speed = new Movies("Jan de Bont", "Speed", 116);

console.log(speed);
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
