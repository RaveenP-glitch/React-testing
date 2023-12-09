export{}

let anyType: any;
anyType = 20;

console.log(anyType);

function add(num1:number, num2:number){
    return num1+num2;
}

const result = add(5,6);
console.log(result);

function addnew(num1:number, num2:number): number{
    if(num2>num1)
        return num1+num2;
    else
        return num1;
}

console.log(addnew(10,11));

interface Person{
    firstName: string;
    lastName: string;
}

function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

fullName(p);

class Employee{
    protected employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good morning ${this.employeeName}`);
    }

}

let emp1 = new Employee("Raveen");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log(`Manager delegating tasks to ${this.employeeName}.`);
    }
}

let m1 = new Manager('Bruce');

m1.delegateWork();
m1.greet();
console.log(m1.employeeName);