let books = [
    {
        title: "Eloquent JavaScript: A Modern Introduction to Programming",
        price: 10.00,
        inventory: 10,
    },
    {
        title: "JavaScript & JQuery: Interactive Front-End Web Development",
        price: 45.59,
        inventory: 2,
    },
    {
        title: "JavaScript: The Good Parts",
        price: 36.05,
        inventory: 8,
    },
    {
        title: "JavaScript: The Definitive Guide",
        price: 25.99,
        inventory: 0,
    },
    {
        title: "You don\'t know JS",
        price: 6.25,
        inventory: 7,
    },
];

//Will loop through inventory
//Find the first object whose condition returns true based on callback

let foundItem = books.find(isBook); //argument can be isBook or stockFirst
console.log(foundItem);  //can also put a whole isbook function as argument

//let foundItem = books.find(book => book.title === "JavaScript: The Definitive Guide");
//console.log(foundItem);


// function loopThroughAndFind(inventory, finder) {
//     let result = null;
//     for(let item of inventory){
//         if(finder(item) === true){
//             result = item;
//             break;
//         }
//     }
//     return result;
// }

//Will find a given book

function isBook(book){
    return book.title === "JavaScript: The Definitive Guide";
}

//Will find the first book that needs to be restocked.

function stockFirst(item) {
    return item.inventory < 3;
}