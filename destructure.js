const person = {name: "Jack William", age: 17, job: "web devolopment", gfName: "Emma Watson", address: "kochu khet", phone: "01736582916", friends: ['umuk', 'tukum', 'sumuk', 'humuk']};

const { phone } = person;

const complexObject = {
    name = "abc";
    info{
        address: "tankir par",
        leader: "modhu er leader";
        //in bd we call bal in in turkey call modhu
    }
}

const { leader } = complexObject.info;
// // const gfName = person.gfName;
// // const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary address);
// console.log(gfName, phone, salary, address);

const friends = ["umuk khan", "tumuk ali", "sumuk prodhan", "humuk cowdhuri"];
const [ chotoF, ...olderF ] = friends;
console.log(...olderF);