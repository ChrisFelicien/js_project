class Media {
  constructor(title, isCheckedOut, ratings) {
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;
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
    return !this._isCheckedOut;
  }

  addRating(val) {
    return this._ratings.push(val);
  }

  getAverageRating() {
    return this._ratings.reduce(
      (currentSum, rating) => (currentSum += rating),
      0
    );
  }
}
class Book {}
class CD {}
class Movies {}
