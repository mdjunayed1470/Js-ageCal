//  alpha new mearik ..atar mane kono letter ba words ke A-Z sajiye guchiye rakha ...ata korar jonno amra sort() mathd use korbo

// const txt = ['apple','cat','ball','egg','dog','golap','fan','hanif','icon'];

// console.log(txt.includes('dog'));//... কোনো array-এর মধ্যে নির্দিষ্ট একটি মান আছে কিনা তা চেক করতে ব্যবহৃত হয়।

// console.log(txt.reverse());..../*kono array/number ke ulto kore sajanor jonno reverse() mathod use kora hoy */

// console.log(txt.sort());..... * kono array/number ke ogucalo theke sajano gocalo korar jonno amra sort() mathod use korbo............!

//...............................//
// const txt = ['apple','cat','ball','egg','dog','golap','fan','hanif','icon'];

// console.log(Array.isArray(txt)); isArray() এমন একটি মেথড, যা চেক করে কোনো মান Array কিনা | And ফলাফল হিসেবে true বা false রিটার্ন করে।

//................Object Data Strature  ..................//
//................Object Data Strature  ..................//
// const student = [
//     [ 1 ,'Rahim' , '20' , 'gazipur'], 
//     [ 2 ,'Karim' , '10' , 'uttora'], 
//     [ 3 ,'Junayed' , '30' , 'mirput'], 
//     [ 4 ,'Yasin' , '16' , 'gazipur'], 
// ];

// for (let i = 0; i < student.length; i++) {
//     console.log(student[i]);
// },......!!!!!!!

// ...OBJECT DATA STRACTURE START..//
/**
 * Object type er data neyar jonno 2nd{} braket use korte hoy..!
 */
// const student = {
//     roll        : 1,
//     name        : 'Junayed',
//     age         : 15 , 
//     location    : 'Gazipur'
// };
// ......................//
// ......................//
// ......................//
// console.log(student.age);........OBJECT DATA STRACTURE Exalmple
/*multiple object array start*/ 

// const students = [
//     {
//         roll        : 1,
//         name        : 'Junayed',
//         age         : 15,
//         location    : 'gazipur',
//         gander      : 'male',
//     },
//     {
//         roll        : 2,
//         name        : 'Sakib',
//         age         : 17,
//         location    : 'mirpur',
//         gander      : 'male',
//     },
//     {
//         roll        : 3,
//         name        : 'Fatema',
//         age         : 18,
//         location    : 'Dhaka',
//         gander      : 'femal',
//     },
//     {
//         roll        : 4,
//         name        : 'Purnima',
//         age         : 10,
//         location    : 'gazipur',
//         gander      : 'female',
//     },
// ];
// console.log(students[1].gander);
// for in / for off ar maddome out put ante hole..

/* for( data of students){
    console.log(data);
}  ei system ke for off bole */

 /* for( data in students){
    console.log(data);
} ei system ke for in bole ..for in sudhu data object ar index number bole dibe..*/


// for (let i = 0; i < students.length; i++) {
//     console.log(`
//         Name        : ${students[i].name}
//         Roll        : ${students[i].roll}
//         Age         : ${students[i].age}
//         Location    : ${students[i].location}
//         Gander      : ${students[i].gander}
//         `);
// }....for loop diya out put anlam ..

// students.forEach((data) => {
//     console.log(`
//            Name        : ${data.name}
//            Roll        : ${data.roll}
//            Age          : ${data.age}
//            Location     : ${data.location}
//         `);
// });forEach() ar maddo meo korlam..

// students.map((data) => {
//     console.log(`
//            Name        : ${data.name}
//            Roll        : ${data.roll}
//            Age          : ${data.age}
//            Location     : ${data.location}
//         `);
// });...map diyeo kora jay 

