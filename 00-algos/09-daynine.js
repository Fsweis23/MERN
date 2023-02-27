/* https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the
two numbers such that they add up to a specific target.

You may assume that each input would have EXACTLY ONE SOLUTION,
and you may not use the same element twice.

the array is unsorted, contains no floats, and there may be duplicate values

Given arr = [2, 11, 7, 15], target = 9,
Because arr[0] + arr[2] = 2 + 7 = 9
return [0, 2].

example 1
given: [2, 11, 7, 15]
target: 9
output: [0,2]

example 2
given: [3,2,4]
target: 6
output: [1,2]

example 3
given: [3,3]
target: 6
output: [0,1]
*/

function twoSums(arr, target) { }

// console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
// console.log(twoSums([3, 2, 4], 6)); // [1,2]
// console.log(twoSums([3, 3], 6)); // [0,1]

function twoSums(arr, target){
    let dict = {}
    for(let i =0; i< arr.length; i++){
        if(dict[arr[i]] == undefined){
            dict[target-arr[i]] = i
        }else{
            return [dict[arr[i]], i]
        }
    }
    // return dict;
}

function twoSums(arr, target) {
    let pointer = 0, runner = pointer+1;
    while( pointer < arr.length){
        const sum = arr[pointer]+arr[runner]
        if(sum === target){
            return [pointer, runner]
        }
        else{
            runner++;
        }
        if( runner >= arr.length){
            pointer++;
            runner = pointer+1
        }
    }
    return [];
}
-
function twoSums(arr, target) {
    
    let newArr = [];
    let j = 0;

    for( let i = 0; i < arr.length; i++) {
        for(let k = i + 1; k < arr.length; k++) {
            if(arr[i] + arr[k] === target) {
                newArr.push(i);
                newArr.push(k);
                return newArr;
            }
        }
    }
 }
console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]
-
function twoSums2(arr, target) { 
    let newArr = [];
    let i = 0;
    let j = i + 1;
    while(i < arr.length){
        if(arr[i] + arr[j] === target) {
            newArr.push(i, j);
            break;
        } else if(arr[i] + arr[j] !== target){
            if(j === arr.length - 1) {
                i++
                j = i + 1
            } else {
                j++
            }
        }  
    }
    return newArr;
}

console.log(twoSums2([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums2([3, 2, 4], 6)); // [1,2]
console.log(twoSums2([3, 3], 6)); // [0,1]


function twoSums(arr, target) { 
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                newArr.push(i, j);
            }
        }
    }
    return newArr;
}
