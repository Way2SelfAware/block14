//array with only odd numbers return from original
//set a for loop through the array dividing by 2 and aprinting odd numbers to the console//

// Set input array
// Run arrays [2, 4, 6, 8, 11, 20, 15, 22], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [70, 42, 55, 81, 21, 91, 34], [2, 4, 6, 8, 10, 11, 12]
const numbers = [2, 4, 6, 8, 10, 11, 12];

// Use forEach() to iterate through the array, dividing by 2 and printing odd numbers to the console
numbers.forEach((num) => {
  if (num % 2 !== 0) {
    console.log(num);
  }
});
