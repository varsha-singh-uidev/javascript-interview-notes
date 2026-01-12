/*
Topic: String in JavaScript
*/

// Q1. Write a  Code to find the Count of Vowel and Constant in String.

function findCount(str){
    let vowel = 0; 
    let constant = 0;
    let arr = ["a", "e", "i", "o", "u"];
    let char = str.toLowerCase();
    for(let i = 0; i < char.length; i++){
        if(/[a-z]/.test(char[i])){
            if(arr.includes(char[i])){
                vowel++;
            }else{
                constant++;
            }
        }
    }
    console.log(`Vowel count = ${vowel} and Constant count = ${constant}`);
}
let str  = "vOweL And Constant";
findCount(str);

