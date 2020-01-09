"use strict";

//FACTORY FUNCTION
/*
function createCircle(radius) {
  return {
    radius: radius,
    location: {
      x: 1,
      y: 1
    },
    draw: function() {
      console.log("draw");
    }
  };
}
const circle = createCircle(1);

// CONSTRUCTOR FUNCTION

function Circle(radius) {
  console.log("this", this);
  (this.radius = radius),
    (this.location = {
      x: 1,
      y: 1
    }),
    (this.draw = function() {
      console.log("draw");
    });
}
const another = new Circle(1);

function whoIsThis() {
  console.log(this);
}
whoIsThis();

var myObject = {
  age: 18,
  whoIsThis: function() {
    console.log(this);
  }
};
myObject.whoIsThis();

var myObject = {
  myFunction: function(a, b) {
    console.log(a + " " + b);
    console.log(this === myObject);
    console.log(this === myOtherObject);
  }
};
var myOtherObject = {};

myObject.myFunction.call(myOtherObject, "Ciao", "Mondo");
console.log(myOtherObject);

var person = {
  name: "Giovanna",
  greet: function() {
    console.log("Hello" + " " + person.name);
  }
};
person.greet();

var video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags: function() {
    this.tags.forEach(function(tag) {
      console.log(this, tag);
    });
  }
};
video.showTags();

var video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags: function() {
    this.tags.forEach(tag => {
      console.log(this, tag);
    });
  }
};
video.showTags();

var nums = [2, 3, 6, 6, 5];

function getSecondLargest(nums) {
  var largest = nums[0];
  var secondLargest = nums[0];
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (largest < num) {
      largest = num;
      continue;
    }
    if (num > secondLargest && num < largest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
}
console.log(getSecondLargest(nums));

function vowelsAndConsonants(s) {
  var vocals = ["a", "e", "i", "o", "u"];
  var consonants = "";
  for (var i = 0; i < s.length; i++) {
    if (vocals.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonants += s[i] + "\n";
    }
  }
  console.log(consonants);
}
vowelsAndConsonants("javascriptloops");

function trasformToObject(string) {
  var obj;
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    obj[char] = obj[char] + 1;
  }
}

document
  .querySelectorAll(".dropdown")
  .forEach(el => el.addEventListener("click", handleClick));
function handleClick(e) {
  // Prevent <a> links from changing the page
  e.preventDefault();
  const classList = e.currentTarget.classList;

  // Check if the dropdown is currently open
  const isOpen = classList.contains("dropdown--open");
  if (isOpen) {
    classList.remove("dropdown--open");
  } else {
    classList.add("dropdown--open");
  }
}

let x;
let y = x === null;

let promise = new Promise(function(resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

var a = 10;

function Foo() {
  if (true) {
    let a = 4;
  }
  alert(a);
}
Foo();

*/

let calculateArea = (shapes, values) => {
  return new Promise((resolve, reject) => {
    switch (shapes) {
      case "square":
        resolve(values[0] * values[1]);
        break;

      case "rectangle":
        resolve(values[0] * values[1]);
        break;
      case "circle":
        resolve(values[0] * values[0] * 3.14);
        break;
      case "triangle":
        resolve(0.5 * values[0] * values[1]);
        break;
      default:
        reject([-1]);
        break;
    }
  });
};

let getAreas = (shapes, values_arr) => {
  return new Promise(async (resolve, reject) => {
    let areas_array = [];

    for (let i = 0; i < shapes.length; i++) {
      await calculateArea(shapes[i], values_arr[i])
        .then(area => {
          areas_array.push(area);
        })
        .catch(error => {
          return reject(error);
        });
    }
    resolve(areas_array);
  });
};

getAreas(
  ["square", "rectangle", "circle", "triangle"],
  [[2, 2], [3, 4], [5], [2, 4]]
)
  .then(result => console.log(result))
  .catch(error => console.log(error));

function isBalanced(s) {
  var result = "YES";
  var stack = [];
  s.split("").forEach(function(val) {
    switch (val) {
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      case "(":
        stack.push(")");
        break;
      default:
        var test = stack.pop();
        if (val !== test) {
          result = "NO";
        }
    }
  });
  if (stack.length) {
    result = "NO";
  }
  return result;
}

console.log(isBalanced("{[(]}"));

function compareTriplets(a, b) {
  var newArray = [];
  if (a[0] > b[0]) {
    newArray.push(1);
  }
  if (a[1] === b[1]) {
    return;
  }
  if (a[2] < b[2]) {
    newArray.push(1);
  }
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
