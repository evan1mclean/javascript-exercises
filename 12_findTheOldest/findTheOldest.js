const findTheOldest = function(array) {
    let oldest = array.map(person => {
        if (!person.yearOfDeath) {
           person.yearOfDeath = (new Date()).getFullYear();
           return person;
        }
        else {
            return person;
        }
    }).sort((a, b) => {
        let lastGuy = a.yearOfDeath - a.yearOfBirth;
        let nextGuy = b.yearOfDeath - b.yearOfBirth;
        return (lastGuy > nextGuy) ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
