const findTheOldest = function (arr) {
    const oldest = arr.reduce((previous, current) => {
        const previousAge = getAge(previous.yearOfBirth, previous.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return currentAge > previousAge ? current : previous;
    });
    return oldest;
};

function getAge(yearOfBirth, yearOfDeath) {
    yearOfDeath = yearOfDeath || new Date().getFullYear();
    return yearOfDeath - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
