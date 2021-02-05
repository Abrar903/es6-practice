const age = [13, 12, 11, 14, 17];
const age2 = [14, 18, 16];
const age3 = [24, 27, 36, 25];
const allAges = age.concat(age2).concat([5]).concat(age3);
const allAges2 = [...age, ...age2, 5, ...age3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha = [650, 450, 250, 1000];
const maximum = Math.max(business, minister, sochib);
const maximum2 = Math.max(...takaPoisha);
console.log(maximum2);