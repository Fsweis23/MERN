// Functional programming
// map() .filter()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];

// map()

function changeMe(animalElement) {
    return animalElement + " is cool";
}

const newAnimals = animals.map( function (animalElement) {
    return animalElement + " is cool";
} );

const newAnimalsArrow = animals.map( animalElement => {
    return animalElement + " is cool";
} );

const moreAnimals = animals.map( (animal, idx) => {
    return `${idx+1} - ${animal} is very cool`;
} )

console.log(moreAnimals)

// --- filter ---
animals.filteredAnimals = animals.filter( (eachOneElement, index) => {
    if (eachOneElement.length <= 5) {
        return true;
    } else {
        return false;
    }
} )

const filteredAnimals2 = animals.filter( (a) => {
    return a <= 5;
} )

console.log(filteredAnimals2)