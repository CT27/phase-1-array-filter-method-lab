// Code your solution here
// `findMatching`- This function takes an array of drivers' names and a `string`
// as arguments, and returns the matching list of drivers. The function should be
// case insensitive.

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(driversArray, searchString) {
  return driversArray.filter(
    (driver) => driver.toLowerCase() === searchString.toLowerCase()
  );
}

console.log(findMatching(drivers, "Bobby")); // Output: ["Bobby", "Bobby"]

// * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
// as arguments for querying the array, and returns all drivers whose names begin
// with the provided letters.

function fuzzyMatch(driversArray, query) {
  return driversArray.filter((driver) => driver.startsWith(query));
}

console.log(fuzzyMatch(drivers, "Sa")); // Output: ["Sammy", "Sally", "Sarah"]

// * `matchName` - This function takes an array of `driver` objects and a `string`
// as arguments. Each `driver` object has two properties: `name` and `hometown`.
// The function should return each element whose `name` property matches the
// provided `string` argument.

const driversH = [
  { name: "Bobby", hometown: "New York" },
  { name: "Sammy", hometown: "Los Angeles" },
  { name: "Sally", hometown: "Chicago" },
  { name: "Annette", hometown: "Miami" },
  { name: "Sarah", hometown: "Seattle" },
  { name: "Bobby", hometown: "San Francisco" },
];

function matchName(driversHArray, name) {
  return driversHArray.filter((driver) => driver.name === name);
}

console.log(matchName(drivers, "Bobby"));
// Output: [{ name: "Bobby", hometown: "New York" }, { name: "Bobby", hometown: "San Francisco" }]
