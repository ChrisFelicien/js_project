class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  //   getters
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents !== "number") {
      return console.log(
        "Invalid input: numberOfStudents must be set to a Number."
      );
    }

    return (this._numberOfStudents = newNumberOfStudents);
  }
  quickFacts() {
    return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level. `;
  }
  static pickSubstituteTeacher(pickSubstituteTeacher) {
    const randomNum = Math.floor(Math.random() * pickSubstituteTeacher.length);

    return pickSubstituteTeacher[randomNum];
  }
}

const test = new School("Test", "test", 10);

console.log(test.quickFacts());

// Primary
class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);

    this._pickupPolicy = pickupPolicy;
  }
}

const testPrimary = new Primary("Test", 20, "hello");

console.log(testPrimary);
//Middle

class Middle {
  constructor() {}
}
