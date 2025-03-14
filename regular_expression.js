// let txt = "My name is junayed . I love JS";

// let pattern = /love/i;
/**
 * /love/i এর শেষে i ফ্ল্যাগ দেওয়ার মানে হলো case-insensitive search, অর্থাৎ বড় হাতের (uppercase) ও ছোট হাতের (lowercase) অক্ষরের পার্থক্য না করেই মিলে যাবে।
 * এই ক্ষেত্রে, i ফ্ল্যাগ থাকার কারণে "LOVE", "love", "LoVe" ইত্যাদি যেকোনো ফরম্যাটেই match করবে।
 * এখানে শুধুমাত্র "love" মিলে যাবে, কিন্তু "LOVE" মিলবে না কারণ case-sensitive search হবে।
 */
    // console.log(pattern.test(txt));
/**
 * test() মেথডটি RegExp (Regular Expression) অবজেক্টের একটি মেথড, যা কোনো স্ট্রিং একটি নির্দিষ্ট প্যাটার্ন মিলে কিনা তা পরীক্ষা করতে ব্যবহৃত হয়। এটি একটি Boolean (true/false) ভ্যালু রিটার্ন করে।
 */

// multiple pattern use korar niyom

// let txt = "My name is junayed . I love JS . I am a good boy and i love also biriyani";

// let pattern = /love|good|beriyani|/i;

// console.log(pattern.test(txt));


//************************************** */

// let txt = "ami tomake valobasi";
// let pattern =/(I|ami) (love|tomake) (you|valobasi)/i;
// console.log(pattern.test(txt));


// let txt = "javascript";
// let pattern =/^javascript$/i; // ^ ei cinho dara bujjace javascript word ta txt file er suru te thaktei hobe jodi txt var er modde jsvascript word ta suru te thek tahole se true return korbe jodi na thake tahole false return korbe.and last a $ cinho dara bujjace javascript word ar seser word mane t akhnae jodi last a t na thakto tahole se false return korto..... 

// console.log(pattern.test(txt));

// let txt = "jfttnthjjffjnt";
// let pattern = /j.t/i;// j ar pore dot deyar mane hocce txt ar modde j ar pore ja khusi dew but sei word ar ses jano t thake...orthat j dara suru and t dara ses hote hobe maj khane ja kusi use koro

// console.log(pattern.test(txt));


// let txt = "htq";
// let pattern = /^h[a-z]q$/i;

// console.log(pattern.test(txt));