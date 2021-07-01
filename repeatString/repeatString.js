const repeatString = function(string, amtToRepeat) {
    let newString = '';

    // Verify amount to repeat string by is positive
    if (amtToRepeat < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < amtToRepeat; i++) {
        newString += string;
    }
    return newString;
};

module.exports = repeatString;
