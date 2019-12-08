"use strict";

//FACTORY FUNCTION

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
