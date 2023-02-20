function Plane(namePlane) {
  this.name = namePlane;
  this.isFlying = false;

  //true
  this.takeOff = function () {
    return (this.isFlying = true);
  };
  //false
  this.land = function () {
    return (this.isFlying = false);
  };
}
let first = new Plane('FirstPlane');
let second = new Plane('SecondPlane');
let third = new Plane('ThirdPlane');
//buttons
let numOfLiting = document.getElementById('counter');
function firstChangHandler() {
  first.isFlying == false ? first.takeOff() : first.land();
  return airport.getFlyingPlanes();
}

function secondChangHandler() {
  second.isFlying == false ? second.takeOff() : second.land();
  return airport.getFlyingPlanes();
}
function thirdChangHandler() {
  third.isFlying == false ? third.takeOff() : third.land();
  return airport.getFlyingPlanes();
}

function Airport(...namePlane) {
  this.planes = namePlane;

  this.getFlyingPlanes = function () {
    let counter = 0;
    for (let key of this.planes) {
      if (key.isFlying == true) {
        counter += 1;
      }
    }
    return (numOfLiting.innerHTML = counter);
  };
}

const airport = new Airport(first, second, third);
console.log(airport);

//SECOND TASK
function User(userName, surName) {
  this.name = userName;
  this.surname = surName;

  this.getFullName = function () {
    return this.name + ' ' + this.surname;
  };
}
const userOne = new User('Alex', 'Reider');

function Student(year) {
  this.years = year;
  this.thisYear = 2022;

  this.getCourse = function () {
    return this.thisYear - this.years;
  };
}

let studentCourse = new Student(getYear());
userOne.__proto__ = studentCourse;
alert(
  `Студент - ${userOne.getFullName()}, Курс студента - ${studentCourse.getCourse()}`
);

function getYear() {
  year = +prompt('Enter Year from 2017 till 2021');

  while (this.year < 2017 || this.year >= 2022) {
    year = prompt('Try again');
  }
  return this.year;
}

//+++++++++++++++++++++++++
String.prototype.countAllUpperCase = function () {
  let countAll = 0;
  for (let i = 0; i <= text.length; i++) {
    if (text[i] !== text2[i]) {
      countAll += 1;
    }
  }
  return countAll;
};
let text = prompt('Enter text and I will count all Uppercawe latter');
let text2 = text.toLocaleLowerCase();
alert(text.countAllUpperCase());
