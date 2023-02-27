/* 
findByIdAndUpdate(id, updateObject, arr)
Given an id, an object that has keys with corresponding updated values, and an array of objects
Find the object by "id" key that matches the given id value and then update that object's
keys with the provided new values.
Return the updated object, or null if no object was found

check 
someObj.hasOwnProperty("key")
Object.keys(someObj) // returns [an array of "keys"]
*/

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

function findByIdAndUpdate(id, updatedVals, collection) { }

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
console.log(findByIdAndUpdate(5, {}, students));

function findByIdAndUpdate(id, updatedVals, collection) { 
    for(let obj of collection) {
        if(obj.id === id) {
            for (let key in updatedVals) {
                if(obj.hasOwnProperty(key)){
                obj[key] = updatedVals[key];
                }
            }
            return obj;
        }
    }
    return null;
}

//this function's if check assumes the array is organized and doesnt have gaps in data
function findByIdAndUpdate(id, updatedVals, collection) {
    //id-1 because this is an array
    if(!collection.hasOwnProperty(id-1)){
        return null
    }

    //[0] at the end to remove the array part of the state so we're only looking at the matching object
    let filtered = collection.filter(item => item.id === id)[0]
    Object.assign(filtered, updatedVals)
    return filtered
}