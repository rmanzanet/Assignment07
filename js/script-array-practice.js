// Step 1
let favMovies = ["Inception", "Interstellar", "The Matrix", "Gladiator", "The Dark Knight"];
console.log(favMovies[1]); // Interstellar

// Step 2
let movies = new Array(5);
movies[0] = "Inception";
movies[1] = "Interstellar";
movies[2] = "The Matrix";
movies[3] = "Gladiator";
movies[4] = "The Dark Knight";
console.log(movies[0]); // Inception

// Step 3
movies.splice(2, 0, "Fight Club"); // Insert at index 2
console.log(movies.length); // 6

// Step 4
let movies2 = ["Inception", "Interstellar", "The Matrix", "Gladiator", "The Dark Knight"];
delete movies2[0];
console.log(movies2); // [empty, "Interstellar", ...]

// Step 5
let movies3 = ["Inception", "Interstellar", "The Matrix", "Gladiator", "The Dark Knight", "Fight Club", "Memento"];
for (let index in movies3) {
  console.log(movies3[index]);
}

// Step 6
for (let movie of movies3) {
  console.log(movie);
}

// Step 7
for (let movie of movies3.sort()) {
  console.log(movie);
}

// Step 8
let leastFavMovies = ["Movie 43", "The Room", "Cats"];
console.log("Movies I like:\n");
for (let movie of movies3) {
  console.log(movie);
}
console.log("\nMovies I regret watching:\n");
for (let movie of leastFavMovies) {
  console.log(movie);
}

// Step 9
let allMovies = movies3.concat(leastFavMovies);
console.log(allMovies.sort().reverse());

// Step 10
console.log(allMovies[allMovies.length - 1]); // Last item

// Step 11
console.log(allMovies[0]); // First item

// Step 12
let dislikedMovies = ["Movie 43", "The Room", "Cats"];
let indices = allMovies.map((movie, i) => dislikedMovies.includes(movie) ? i : -1).filter(i => i !== -1);
indices.forEach(index => {
  allMovies[index] = "The Prestige";
});
console.log(allMovies);

// Step 13
let rankedMovies = [
  ["Inception", 1],
  ["Interstellar", 2],
  ["The Matrix", 3],
  ["Gladiator", 4],
  ["The Dark Knight", 5]
];
let movieNames = rankedMovies
  .flat()
  .filter(item => typeof item === "string");
console.log(movieNames);

// Step 14
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
let showEmployee = function(empArray) {
  console.log("Employees:\n");
  for (let emp of empArray) {
    console.log(emp);
  }
};
showEmployee(employees);

// Step 15
function filterValues(arr) {
  return arr.filter(value => value !== false && value !== null && value !== 0 && value !== '');
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

// Step 16
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Step 17
function getLargestNumber(arr) {
  return Math.max(...arr);
}
console.log(getLargestNumber([5, 12, 47, 3, 98, 21]));
