// array likhar best practice hocce const variable ar modde neya


// const pakhi = [ 'coroi' , 'moyna','tiya','babui','peca','kak','white kak','moyur'];

// for(let i = 0; i < pakhi.length ; i++){
//     console.log(pakhi[i]);
// }


// forEach loop............//
//  const food = ['alo','potol','sosa','kola','begun','tetul'];
// callback function....//
// ...............................
//  food.forEach(function(aloo){
//     console.log(aloo);
//  });

// ........................
// food.forEach(data => console.log(data)); 1 line a kora jayy

/**
 * forEach loop ata sudhu array er jonno use kora jay 
 */

// map loop //
// const food = ['alo','potol','sosa','kola','begun','tetul'];
// callback function....//

// food.map(function(data){
//     console.log(data);
// })

/**
 * 1 line a lekhar jonno 
 * food.map(data => console.log(data));
 */

/**
 * Data structure ....class 6 
 */

/*

const devs = [
    [ 'Junayed', 15 ,'Js','Gazipur' ] ,
    [ 'Bayzid', 20,'PHP','Kumilla' ] ,
    [ 'Farhan', 22 ,'React','Stylte' ] ,
    [ 'Jayed', 10 ,'PHP','Mirpur' ] ,
    [ 'Ashik', 35 ,'Js','Gazipur' ] ,
    [ 'Hasan', 25 ,'Js','Gazipur' ] ,
    [ 'Musfiq', 25 ,'PHP','Dhaka' ] ,
    [ 'Habib', 17 ,'React','Gazipur' ] ,
    [ 'Nehal', 15 ,'Js','Kumilla' ] ,
    [ 'Shihab', 17 ,'PHP','kumilla' ] ,
];

for(let i = 0 ; i < devs.length ; i++){
    
    if(devs[i][3] == 'Gazipur' && devs[i][2] == 'Js'){
        console.log(`==============================`);
        devs[i].map( data => console.log(data));
        console.log(`================================`);
    }
}
*/

// array always const ar modde lekha lagee
/**
 * array to string 
 */
// const food = ['alo','potol','lao','kodo','peyaj'];
// console.log(food.toString()); // array ke string a convert korar jonno tostring use kora hoy..!

// console.log(food.join(' ')) array te thaka koma er poriborte onno kicu dite caile join mathod use kora hoy 

/*
string to array 🙂
*/
// let txt = `Hello World , i love js , i am a web developer , i love to play Free FIre`;

// console.log(txt.split(' , ')); string ke array te convert korar jonno split() mathod use kora hoy..!


/*
kono array te extra value add korte caile push() mathod use kora lage...jemon...
*/ 

// const food = ['alo','potol'];
// food.push('kumra','lebu')
// food.unshift('begun') ; // array ar first a kicu add korte cai unshift() use kora hoy..!
// food.shift('alo') ; // array ar first a kicu remove` korte cai shift() use kora hoy..!
// food.pop() last ar value delete korar jonno pop() mathod use kora hoy 
// console.log(food);

// const flower = ['togor' , 'gadha','kodom','beli','golap'];

//flower.splice(3 , 2 ); 3 number position theke porer 2 ta value delete hoye gelo.. 

/*
jodi array ar kono akta value ar poriborte onno akta value set korte cai ba replace korte cai  tahole amra jevabe korbo seta holo..

flower.splice(3 ,1, 'surjo mukhi');
*/
// console.log(flower); 

//.......................//
// const arr1 = [1, 2, 3];
// consot arr2 = [4, 5, 6];

// let result = arr1.concat(arr2);
// console.log(result); concat() হলো JavaScript-এর একটি মেথড, যা দুটি বা তার বেশি array বা string একসাথে যোগ (concatenate) করতে ব্যবহৃত হয়। এটি নতুন array বা string তৈরি করে এবং মূল মান পরিবর্তন করে না।
