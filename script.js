function calcAge(birthYear){
    const age = 2037 - birthYear;

    function printAge(){
        let output = `${firstName}, You are ${age} old, born in ${birthYear}`; 
        console.log(output);

        if(birthYear>=1981 && birthYear<=1996){
            var mellanial = true;
            const firstName = "Steven";
            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);

            function add(a,b){
                return a+b;
            }
            output = "New Output";
        }
        console.log(mellanial);
        
    }
    printAge();
  
    return age;
}
const firstName = "jonas";
calcAge(1996);

console.log(me);
// console.log(job);
// console.log(year);

var me = "jonas";
let job = "teacher";
const year = 1996;

console.log(addDel(2,3));
// console.log(addExpr);
// console.log(addArrow(2,3));

function addDel(a,b){
    return a+b;
}

var addExpr = function(a,b){
    return a+b;
}

var addArrow = (a,b)=>a+b;

// console.log(addArrow(2,3));

if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log("All products are deleted");
}

console.log(this);

const calcAge1 = function(birthYear){
    console.log(2037-birthYear);
    console.log(this);
}; 
calcAge1(1996);

const calcAge1Arrow = birthYear =>{
    console.log(2037-birthYear);
    console.log(this);
}
calcAge1Arrow(1996);

// var firstName1 = "Dustin";
const friend = {
    firstName: "jonas",
    lastName: "Doe",
    birthYear1: 1995,
    calcAge: function(){
        // console.log(this);
        console.log(2037 - this.birthYear1);

        // const self = this;
        // const millenial = function(){
        //     console.log(this);
        //     console.log(this.birthYear1>=1981 && this.birthYear1<=1996);
        // },
        // millenial();

        const millenial = ()=>{
        console.log(this);
        console.log(this.birthYear1>=1981 && this.birthYear1<=1996);
        };
        millenial();
    },
    greet: function() {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    }
};
friend.calcAge();

const matilda = {
    birthYear: 2017
};
matilda.calcAge = friend.calcAge;
console.log(matilda.calcAge());

const f = friend.calcAge;
console.log(f());

friend.greet();

const addExpr1  = function(a, b){
    console.log(arguments);
    return a+b;
}
addExpr1(2, 5, 8, 15);

const addExpr2 = (a,b)=>{
    console.log(arguments);
    return a+b;
}
// addExpr2(2, 2);


let me1 = {
    firstName: "Jonas",
    age: 30
};

let friend1 = me1;
friend1.age = 27;
console.log("Friend", friend1);
console.log("me", me1);

let lastName1 = "Miller";
let oldLastName = lastName1;
lastName1 = "Devis";
console.log(lastName1, oldLastName);

const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    family: ["Alice", "Bob"]
};
const marriedJessica = jessica;
marriedJessica.lastName = "Miller";
console.log("Before", jessica);
console.log("After", marriedJessica);

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = "Devis";
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log("Before", jessica);
console.log("After", jessicaCopy);

