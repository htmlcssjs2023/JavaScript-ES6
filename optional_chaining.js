// var, let, const
// default parameter
// arrow function
// spread operator
// template string
// destructuring operator

// const users = [{id:123, name: 'Halim', job: 'Marketing'}];
// console.log(users[0].name);

const book = {
    price: 1929,
    author:{
        address:{
            houseNo: '24/A, Bosila West Dhanmondi Housing',
            city: 'Dhaka',
            phoneNo: 122435
        }
    }
}
// optional chaining
const showAddress = book.author.ddress?.city;
console.log(showAddress);