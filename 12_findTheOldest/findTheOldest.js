const findTheOldest = function() {
  arguments[0].sort( (a,b) => {return (calculateAge(b)) - (calculateAge(a))} )
  return arguments[0][0]
};

function calculateAge(person) {
  if ("yearOfDeath" in person)
    return person.yearOfDeath - person.yearOfBirth
  else
    return (new Date().getFullYear()) - person.yearOfBirth;
}
// Do not edit below this line
module.exports = findTheOldest;

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});