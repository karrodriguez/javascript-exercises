const leapYears = function(year) {
    year = +year;  //convert to 'number'
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? true : false;
};

module.exports = leapYears;
