"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Welcome back";
console.log(message);
var x;
x = 57;
console.log("x: ", x);
console.log("u: ", u);
var sum;
var title = 'Codevolution';
var isBeginner = true;
var total = 0;
var name = 'Raveen';
var sentence = "My name is ".concat(name, " I am a beginner in Typescript");
console.log(sentence);
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple (fixed types with order)
var person1 = ['Chris', 22];
console.log(person1);
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 7] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "Raveen";
console.log(randomValue);
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
else {
    console.log("no name property");
}
var multitype;
multitype = 10;
multitype = true;
console.log(multitype);
