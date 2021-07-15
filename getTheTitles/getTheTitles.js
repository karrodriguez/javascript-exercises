const getTheTitles = function(arr) {
    return arr.map(author => `${author.title}`);
};

module.exports = getTheTitles;
