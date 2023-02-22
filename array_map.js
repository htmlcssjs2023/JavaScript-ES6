const numbers = [2, 4, 8, 10];
// const output = [];

// for(const number of numbers){
//     const double = number * 2;
//     output.push(double);
// }
// alt + shift + F = format

// console.log(output);

function getDouble(numbers){
    const output = [];
    for(const number of numbers){
        const double = number * 2;
        output.push(double);
    }

    return output;
}

// function doubledIt(number){
//     return number *2;
// }

const doubleIt = num => num *2;

const result = getDouble(numbers);
console.log(result);

const fiveTimes = [1,2 , 3, 4, 5].map(x => x*5);
console.log(fiveTimes);

const makeDoubled = numbers.map(doubleIt);
console.log(makeDoubled);

const makeEAsy = numbers.map(x => x * 3);
console.log(makeEAsy);

// array of object

const products = [
    {id: 1, name:'Iphone', price: 29393},
    {id: 2, name:'Notebook', price: 39393},
    {id: 3, name:'Dell Laptop', price: 49393},
    {id: 4, name:'HP Laptop', price: 19393},
]

// const productResult = products.map( product => console.log(products));
const item = products.map(p => console.log(p.name));


const friends = ['Rezwanur Rahman','Halim','Arif','Shiblee','Asraf','Ibrahim'];

const nameLength = friends.map(friend => friend.length);
console.log(nameLength);

const firstLetter = friends.map(first => first[0]);
console.log(firstLetter);