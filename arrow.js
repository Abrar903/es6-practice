// function doubleIt(num = 4) {
//     return num * 2;
// }

// const doubleIt = function myFung(num = 4) {
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add = (X, Y) => X + Y;
const give5 = () => 5;
const doMath = (X, Y) => {
    const sum = X + Y;
    const diff = X - Y;
    const result = sum * diff;
    return result;
}

const result = add(70, 60);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);