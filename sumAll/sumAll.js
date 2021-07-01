const sumAll = function(int1, int2) {
    let sum = 0;
    if (typeof(int1) !== 'number' || typeof(int2) !== 'number') {
        return 'ERROR';
    }
    else if (int1 < 0 || int2 < 0) {
        return 'ERROR'
    }

    if (int2 < int1) {
        [int1, int2] = [int2, int1];
    }

    for (let i = int1; i <= int2; i++) {
        sum += i;
    }

    return sum;
};

module.exports = sumAll;
