const findTheOldest = function(people) {
    const oldestPerson = people.sort(function(personA, personB) {
        const currentYear = new Date().getFullYear();

        let prevPersonAge = ("yearOfDeath" in personA) ? personA.yearOfDeath - personA.yearOfBirth : currentYear - personA.yearOfBirth;
        let currPersonAge = ("yearOfDeath" in personB) ? personB.yearOfDeath - personB.yearOfBirth : currentYear - personB.yearOfBirth;

        return (prevPersonAge > currPersonAge) ? -1: 1;
    });

    return oldestPerson[0];
};

module.exports = findTheOldest;
