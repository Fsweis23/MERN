/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                         v
const str1 = "b70 a164 c32 a20 c10";
const expected1 = "a184 b70 c42";
// isNaN
// parseInt()
// someObj.hasOwnProperty("key")


function rehash(str) { 

}

rehash(str1);
// console.log(rehash(str1) === expected1, "<-- should be \"true\"");

function rehash(str) { 
    //define empty object
    //define empty array
    //define return string
    //loop over the hashed string
    //at each alphanumeric in the string, split it and add the letter to an object
    //add the numbers following the letter as the value for a key value pair
    //if the letter is already in the object, then just add the numbers
    //join the the key-value pairs as chunks in an array
    //alphabetically order the array
    //push each chunk into an empty string
    //return 

    let sections = {};
    let chunks = [];
    let rehash = "";
    for(let i = 0; i < str.length; i++){
        if(isNaN(str[i])){
            let j = i + 1;
            let num = "";
            for(j; !isNaN(Number(str[j])); j++){
                num += str[j];
            }
            if(sections.hasOwnProperty(str[i])){
                sections[str[i]] += Number(num)
            }else {
                sections[str[i]] = Number(num)
            }
        }
    }
    for(let key in sections){
        let chunk = "";
        chunk += key + sections[key]
        chunks.push(chunk)
    }
    chunks.sort()
    for(let n of chunks){
        rehash += n;
    }
    return rehash;
}

function rehash(str){
    /*
    first we will pre-populate a hashmap with all the letters as keys and 0 as starting value;
    one temp variable to indicate the char key we are at : charIndex
    one temp variable to hold the numeric value as string: num
    loop through the string:
        if the index is a letter;
            add(parseInt) the previous added numbers(num) into it's value and reset the num to '';
            and put it in a place holder variable(charIndex), 
        if the index is a number;     
            add to the num
    after the loop, 
    loop through the hashmap:
        remove all the keys with value of 0;
    After the loop, use built in methods: Object.entries and .join() to concat the object into an string
    and lastly .replaceAll to remove all the ','
    */ 
    let hashmap = {a:0,b:0,c:0,d:0,e:0,f:0}
    let num = '0';
    // console.log(result[charIndex])
    let charIndex = str[0];
    for( let char of str){
        if(isNaN(char)){
            hashmap[charIndex] += parseInt(num);
            num='';
            charIndex = char;
        }
        else{
            num+= char
        };
    }
    hashmap[charIndex] += parseInt(num);
    for( let key in hashmap){
        if(hashmap[key]===0){
            delete hashmap[key];
        }
    }
    let result = Object.entries(hashmap).join(' ').replaceAll(',','')
    console.log(result)
    return result;
}

function rehash(str) {
    // make an iterator
    let i = 0;
    // make anew dictionary for the letters
    let dict = {};
    // while loop over the lenght of the string to separate out the numbers and letters
    while(str[i]) {
        let tempLetter = str[i]
        // check if the letter is an entry in the dictionary or not
        if(!dict.hasOwnProperty(str[i])) {
            // add a new dictionary entry if it isn't in the dictionary
            dict[str[i]] = 0;
        }
        i++;
        // make a temporary string to capture the numbers
        let tempStr = "";
        // run a while loop and add each set of consecutive numbers to the string
        while(str[i] && !isNaN(str[i])) {
            tempStr = tempStr + str[i];
            i++;
        }
        // add the numbers to the current dictionary entry
        dict[tempLetter] += parseInt(tempStr)
    }
    // make two separate arrays of numbers and letters
    let keys = Object.keys(dict);
    let values = Object.values(dict);
    // bubble sort the letters (keys) array along with the numbers (values) array
    for(let k = 0; k < keys.length; k++) {
        for(let j = 0; j < keys.length; j++) {
            if(keys[j] > keys[j+1]) {
                let temp1 = keys[j+1];
                let temp2 = values[j+1];
                keys[j+1] = keys[j];
                values[j+1] = values[j]
                keys[j] = temp1;
                values[j] = temp2;
            }
        }
    }
    // make a final return string that combines the letters and numbers one by one
    let returnFinal = "";
    for(let i = 0; i < keys.length; i++) {
        returnFinal = returnFinal + keys[i] + values[i];
    }

    return returnFinal;
}