const removeFromArray = function(array) {
    let args = [].slice.call(arguments);
    args.shift();

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!(args.includes(array[i]))) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

module.exports = removeFromArray;
