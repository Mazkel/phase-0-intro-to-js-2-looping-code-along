// Code your solutions in this file

function writeCards(names, occasion) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${occasion} gift!`)
};

function countDown(start) {
    for (let i = start; i >= 0; i--) {
        console.log(i);
    }
}