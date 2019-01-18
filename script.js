// const user = {
//     name: 'Admin',
//     lastName: 'Gogi',
// };
//
// console.log(user.name);
//
// user.age = 20;
// console.log(user.age);
// console.log(user['age']);
//
// var key = 'age';
//
// console.log(user[key]);
//
// user.name = 'Gogi';
// // console.log(user);
//
// const Vasya = {
//     id: 1,
//     name: 'Vastya',
//     lastname: 'Pupkin',
//     age2: 123
// }
//
//
// console.log(Vasya['id'])

// const myNotes = {
//     math: 75,
//     eng: 86,
//     cb: 86,
//     sitak: 90,
//     physik: 65,
//     oikzi: 65,
//     fp: 80
// };
//
// let sumOfNotes = myNotes.cb + myNotes.eng + myNotes.math + myNotes.sitak + myNotes.physik + myNotes.fp + myNotes.oikzi;
// let quantityOfScores = 7;
//
//
// console.log(`my average note is ${sumOfNotes / quantityOfScores}`);


// const me = {
//     firstName: 'Kostya',
//     lastName: 'Yeslkiy',
//     math: 75,
//     eng: 86,
//     cb: 86,
//     sitak: 90,
//     physik: 65,
//     oikzi: 65,
//     fp: 80
// };
//
// let sumOfScores = 0;
// let quantityOfScores = 0;
// for (let key in me) {
//     if (typeof me[key] == 'number') {
//         sumOfScores += me[key];
//         ++quantityOfScores;
//     }
// }
// console.log(`my avarage score is ${sumOfScores / quantityOfScores}`);

const user = {
    name: 'Kostya',
    lastName: 'Yelskiy',
    phone: null,
    universeAnswer: function () {
        alert(42);
        return true;
    },
    getFullName: function () {
        return `${this.name}  ${this.lastName}`
    },
    mathGrade: 75,
    englishGrade: 86
};

user.getFullName();

const user2 = user;

user2.name = 'User';

console.log(user2);
console.log(user);