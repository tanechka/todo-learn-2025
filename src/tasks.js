// замыкание
function createCounter(initialValue = 0) {
    let count = initialValue;

    let increment = () => { count = count + 1; }
    let decrement = () => { count = count - 1; }
    let getValue = () => count;

    return {
       increment,
       decrement,
        getValue,
   }
}

const counter = createCounter(5);
counter.increment(); // 6
counter.increment(); // 7
counter.decrement(); // 6
console.log(counter.getValue()); // 6

/**
 * Что выведется в консоль и в каком порядке?
 * Задача на eventLoop
 */

console.log('1. Start');

setTimeout(() => {
    console.log('2. Timeout');
}, 0);

Promise.resolve()
    .then(() => {
        console.log('3. Promise 1');
        return Promise.resolve();
    })
    .then(() => {
        console.log('4. Promise 2');
    });

console.log('5. End');

// Задачи на this

/*
const user = {
    name: 'Anna',
    todos: ['Learn React', 'Learn TypeScript'],
    showTodos: function() {
        this.todos.forEach((todo) => {
           console.log(`${this.name}: ${todo}`);
        });
    }
};
*/
// const user = {
//     name: 'Anna',
//     todos: ['Learn React', 'Learn TypeScript'],
//     showTodos: function() {
//         this.todos.forEach(function (todo){
//             console.log(`${this.name}: ${todo}`);
//         }.bind(this));
//     }
// };

const user = {
    name: 'Anna',
    todos: ['Learn React', 'Learn TypeScript'],
    showTodos: function() {
        const self = this;

        this.todos.forEach(function (todo){
            console.log(`${self.name}: ${todo}`);
        });
    }
};

user.showTodos();