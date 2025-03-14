// ************Date Object***************//
// let date = new Date();
// const dayName= ['Sun','Mon','Tue','Wed','Thus','Fri','Sat'];
// console.log(`
//     Date        : ${date.getDate() > 9 ? date.getDate() : "0"+ date.getDate()}
//     Month        : ${date.getMonth() + 1} 
//     Year        : ${date.getFullYear() }
//     Time        : ${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}
// `);


/**
 * Get day functions
 */
// function today(index){
//     const dayName= ['Sun','Mon','Tue','Wed','Thus','Fri','Sat'];
//     return dayName[index] ;
// }
// console.log(today(date.getDay()));

//************************************ */
// let date = new Date() ;
// console.log(date.getTime());

/*************************** */

// let date = new Date(133458696);
// console.log(date);

//****************************** */

// let date = new Date('2010-10-20');
// console.log(date.getTime());

// let ageCal =(name,year) => {
//     let date = new Date();
//     console.log(`
//         Hi ${name} , You are ${ date.getUTCFullYear() - year}
//         `);
// }

// ageCal('Junayed',2007);

/*************Math Object**************** */

// Pai er man ber korte holee Math.PI likha lage 

// console.log(Math.PI); Math er pore . / dot diye amra jekono math er sutro ber korte pari 

// let amount = -13;
// console.log(Math.abs(amount)); nagative value ke positive korar jonnno 

/****************************** */
// let amount = 5.7;
// console.log(Math.floor(amount));এটি সংখ্যা নিচের পূর্ণসংখ্যায় নামিয়ে দেয়। 5.7 → 5 (ডেসিমালের অংশ ফেলে দেয়)

// console.log(Math.round(amount));5.7 → 6 (যেহেতু 0.5 বা তার বেশি হলে উপরের দিকে রাউন্ড হয়)

// console.log(Math.ceil(amount)); dosomik er pore ja ace tai dibee...mane ja ace tai thakbe

// Math.floor(5.7)	→ 5 (নিচে নামাবে)
// Math.round(5.7)	→ 6 (নিকটতম পূর্ণসংখ্যায় রাউন্ড করবে)
// Math.ceil(5.7)	→ 6 (উপরে উঠাবে)

/******************************* */
// let amount = 13;
// console.log(Math.min(1,23,55,44,67,889,45)); minimum number khujar jonno amra ata use kore thaki
// console.log(Math.max(1,23,55,44,67,889,45)); maximum number khujar jonno amra ata use kore thaki

/****************************** */

//console.log(Math.pow(2,3)); 2³ = 8 square ba power gun korte math.pow use kora hoy

/*************************** */
/**
 * Math.random() a jodi dosomik number na cai tahole ceil() method ar modde math.random() neya lageb
 * console.log(Math.ceil(Math.random() * 10000)); 
 */
// console.log(Math.random()); Math.random() হল JavaScript এর একটি ফাংশন যা র‍্যান্ডম (এলোমেলো) সংখ্যা তৈরি করে। এটি ০ এবং ১ এর মধ্যে (০ সহ, ১ ছাড়া) একটি ফ্লোটিং পয়েন্ট সংখ্যা প্রদান করে।

// console.log(Math.random() * 10000);// jodi random number ami 4-5 digit ar cai tahole 1 er pore je koyta digit cai sei koyta 0 dite hone ..jemon ami 4 digit ar akta random number nibo tahole ami 1 pore 4 ta 0 nibo..!

