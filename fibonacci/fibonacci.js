let fibonacci = function(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else if (n >= 2) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    else {
        return "OOPS";
    }
};

module.exports = fibonacci;
