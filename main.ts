export {}
let message = "Welcome back";
console.log(message);

let x;

x = 57;

console.log("x: ", x);
console.log("u: ", u);

let sum;
const title = 'Codevolution';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Raveen';
let sentence: string = `My name is ${name} I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//tuple (fixed types with order)
let person1: [string, number] = ['Chris', 22];
console.log(person1);

enum Color {Red = 5, Green = 7, Blue = 2};

let c: Color = Color.Green;
console.log(c);

let randomValue:any = 10;
randomValue = true;
randomValue = "Raveen";
console.log(randomValue);

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string }{
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name);
}else{
    console.log("no name property");
}

let multitype: number | boolean;
multitype = 10;
multitype = true;


console.log(multitype);


