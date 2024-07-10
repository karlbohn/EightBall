// Returns random item from an array

function getRandom(arr) {
    let randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

export { getRandom };