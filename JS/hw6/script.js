function filterBy(arr, type) {
    return arr.filter(item => typeof item !== type);
}


const array = ['hello', 'world', 23, '23', null];
const typeToFilter = 'string';



const filteredArray = filterBy(array, typeToFilter);
console.log(filteredArray);
