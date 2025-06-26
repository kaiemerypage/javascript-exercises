const getAge = function (person) {
  return (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, current) =>
    getAge(current) > getAge(oldest) ? current : oldest
  );
};

// Do not edit below this line
module.exports = findTheOldest;
