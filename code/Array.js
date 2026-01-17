/*
  Topic: Array in JavaScript
*/ 


//Q1. Find the largest and smallest element
function largestElement(arr){
    let max = -Infinity;
    let min = Infinity;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
          max = arr[i];   
        }
        else if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(`Maximun element in array = ${max} and Minimum element in array = ${min}`);
}
largestElement([1,4,5,13,6,-1,7]); //13 and -1

// * Core Idea:
//  - Initialize max with the -Infinity value.
//     - we start with the -infinity because it was the lowest possible value in js.
//  - Initialize min with the Infinity value.
//     - We start with Infinity because it’s the highest possible value in JavaScript.
//  - Traverse the array once:
//   - If current element > max → update max.
//   - If current element < min → update min.
//  - Print the largest and smallest values.
//  * Time Complexity:  O(n) → must check each element once.
//  * Space Complexity: O(1) → only two variables used.



//Q2. Remove duplicate elements
function removeDuplicate(arr){
    let newArr = [...new Set(arr)];
    console.log(newArr);
}
removeDuplicate([1,2,4,3,2,1,2,3]); //[1,2,4,3]

// * Core Idea: 
// - Use ES6 Set to automatically store only unique values. 
// - Convert the Set back into an array using the spread operator. 
// - Return the new array with duplicates removed. 
// * Time Complexity: O(n) → each element is processed once when inserted into the Set.
// * Space Complexity: O(n) → extra memory used for the Set and the new array.



//Q3. Find duplicate elements
function findDuplicate(arr){
    let obj = {};
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let ele = arr[i];
        obj[ele] = (obj[ele] || 0) + 1;
    }
    for(let ele in obj){
        if(obj[ele] > 1){
            newArr.push(ele);
        }
    }
    console.log(`Duplicate element in the array are: ${newArr}`);
}
findDuplicate([1,2,4,3,2,1,2,3]);//1,2,3

// * Core Idea: 
// - Use an object (hash map) to count occurrences of each element. 
// - Traverse the array once, updating the frequency count for each element. 
// - After counting, iterate over the object keys. 
// - Collect elements whose frequency > 1 → these are duplicates. 
// * Time Complexity: O(n) → each element is processed once.
// * Space Complexity: O(n) → extra memory used for the frequency object and result array.



//Q4. Reverse an array (without built-in reverse)
function reverseArr(arr){
    let i = 0;
    let j = arr.length-1;
    while(i < j){
        let temp = arr[j];
        arr[j] =arr[i];
        arr[i] = temp;
        i++;
        j--;
    }
    console.log(arr);
}
reverseArr([1, 2, 3, 4, 5]); //[5, 4, 3, 2, 1];
reverseArr(["apple", "banana", "cherry"]);//[ 'cherry', 'banana', 'apple' ]

// * Core Idea: 
// - Use two pointers: one starting at the beginning (i) and one at the end (j). 
// - Swap elements at i and j. 
// - Move i forward and j backward until they meet in the middle. 
// - This reverses the array in place without using extra memory. 
// * Time Complexity: O(n) → each element is swapped once. 
// * Space Complexity: O(1) → only one temporary variable is used.



//Q5. Check if array is sorted
function checkSort(arr){
    let flag = false;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i-1]){
            flag = true;
            break;
        }
    }
    if(flag){
        console.log("Array is not sorted");
    }else{
        console.log("Array is sorted");
    }
}
checkSort([1,4,2,5,3]);//not sorted

// * Core Idea: 
// - Traverse the array once. 
// - Compare each element with its previous element. 
// - If any element < previous element → array is not sorted (ascending order). 
// - Otherwise, the array is sorted. 
// * Time Complexity: O(n) → single pass through the array. 
// * Space Complexity: O(1) → only one flag variable used.



//Q6. Find second largest element
function secondLargest(arr){
    let max = -Infinity;
    let sMax = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            sMax = max;
            max = arr[i];
        }
        if(sMax < arr[i] && max !== arr[i]){
            sMax = arr[i];
        }
    }
    console.log(sMax);
}
secondLargest([1,4,2,5,3]); //4

// * Core Idea: 
// - Initialize max and second max with the first element (or -Infinity). 
// - Traverse the array once. 
// - Update max and second max accordingly. 
// * Time Complexity: O(n) → single pass. 
// * Space Complexity: O(1) → only two variables used.
