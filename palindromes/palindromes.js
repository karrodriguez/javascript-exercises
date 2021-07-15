const palindromes = function (str) {
    // Create an array of characters & remove spacing and commas 
    let arrayStr = str.toLowerCase().split("").filter(char => (char.toLowerCase() != char.toUpperCase()));

    // If even, include the pivot point as the second half and split into two subarrays
    let pivot = 0;
    let forwardSubArray = [];
    let backwardSubArray = [];

    if (arrayStr.length % 2 === 0) {
        pivot = arrayStr.length / 2;
        forwardSubArray = arrayStr.slice(0, pivot);
        backwardSubArray = arrayStr.slice(pivot).reverse();
    }

    // If array of characters is an odd length, make the center the pivot point and split into two subarrays
    else {
        pivot = (arrayStr.length - 1) / 2;
        forwardSubArray = arrayStr.slice(0, pivot);
        backwardSubArray = arrayStr.slice(pivot+1).reverse();
    }

    // Compare the forward and backwards subarrays
    forwardSubArray = forwardSubArray.toString().replaceAll(",", "");
    backwardSubArray = backwardSubArray.toString().replaceAll(",", "");

    return forwardSubArray === backwardSubArray ? true : false;
};

module.exports = palindromes;
