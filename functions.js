// ................class 5 .............//
// ................        .............//

/**
 * Function 3 ধরনের ।
 * Function declearation --যেটা অনেক কমন ।
 * Function expressesion -- যেটা let/variable দিয়ে তৈরি করা হয় ।
 * Arrow Function --Arrow / => এই চিহ্ন দিয়ে তৈরি করা হয় ।
 */


// // function decleartion
// function gpa(marks){
 
//     let gpa;
//     if(marks >= 0 && marks < 32 ){
//         gpa = 0;
//     }else if(marks >= 33 && marks < 40 ){
//         gpa = 1;
//     }else if(marks >= 40 && marks < 50 ){
//         gpa = 2;
//     }else if(marks >= 50 && marks < 60 ){
//         gpa = 3;
//     }else if(marks >= 60 && marks < 70 ){
//         gpa = 3.5;
//     }else if(marks >= 70 && marks < 80 ){
//         gpa = 4;
//     }else if(marks >= 80 && marks <= 100 ){
//         gpa = 5;
//     }
//     return gpa;
// }

// // grade cal
// function grade(marks){
 
//     let grade;
//     if(marks >= 0 && marks < 32 ){
//         grade = 'F';
//     }else if(marks >= 33 && marks < 40 ){
//         grade = 'D';
//     }else if(marks >= 40 && marks < 50 ){
//         grade = 'C';
//     }else if(marks >= 50 && marks < 60 ){
//         grade = 'B';
//     }else if(marks >= 60 && marks < 70 ){
//         grade = 'A-';
//     }else if(marks >= 70 && marks < 80 ){
//         grade = 'A';
//     }else if(marks >= 80 && marks <= 100 ){
//         grade = 'A+';
//     }
//     return grade;
// }

// // CGPA 

// // ARROW FUNCTION 

// let cgpa = (bn, en, math , s,ss,rel) => {
//     let totalGpa = (bn + en + math + s + ss + rel);
//     let cpga = totalGpa/6;

//     if (bn == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0){
//      return `You are failed`;
//     }else{
//         return ` Your CGPA is ${cpga} And Grade is ${totalGrade(cpga)} `;
//     }

// }
// // total grade

// function totalGrade(cgpa){
//     if(cgpa >= 0 && cgpa < 1 ){
//         return 'F'
//     }else if(cgpa >= 1 && cgpa < 2 ){
//         return 'D'
//     }else if(cgpa >= 2 && cgpa < 3 ){
//         return 'C'
//     }else if(cgpa >= 3 && cgpa < 3.5 ){
//         return 'B'
//     }else if(cgpa >= 3.5 && cgpa < 4 ){
//         return 'A-'
//     }else if(cgpa >= 4 && cgpa < 5 ){
//         return 'A'
//     }else if(cgpa == 5){
//         return 'A+'
//     }
// }



// * Function declearation --যেটা অনেক কমন ।//////

// function ageCal(name , year){
//     return' hello world ';
// }

// * Function expressesion -- যেটা let/variable দিয়ে তৈরি করা হয় ।//

// let ageCal = function(name , year){
//     return'';
// }

// * Arrow Function --Arrow / => এই চিহ্ন দিয়ে তৈরি করা হয় ।///

// let ageCal = (name , year) => {
//     return '';
// }

// let ageCal = (year) =>{
//     return 2025 - year;
// }
// console.log(ageCal(2011));

/**
 * function 1 line eo lekha jay seta holo
 */

// let ageCal = year => 2025 - year;
// console.log(ageCal(2010));

// ...........................//
// function leader/constractor function//
// .....................................//
// leader function a function er name er fast letter boro hater lekhte hoy...! jemon Student er S boro hater ...!

/**
 * leader function a multiple function neya jay..
 * leader function a multiple function nite hole seta expressesion function vabe likhe hoy...
 * leader function a variable neya jay 
 * variable ba function create korar somoy tar age this. lekha lage 
 */

// function Student(){
//     this.variable = 'this is a variable';
//     this.variableTwo = 'this is a variable';

//     this.ageCal = function(){
//         return "this is a function expressesion";
//     }
//     this.gpa = function(){
//         return "this is a function expressesion";
//     }
// }

// how to call leader function / contractor ///
// .................................................//
// let leaderFunctionCall = new Student();
// console.log(leaderFunctionCall) ;.. nirdisto kore function ba var ke call korte caile . er pore var/ function ta ke call korte hobe 
