// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 

function squareSum(numbers){

    //using the reduce method to accumulate the squares of all elements in the array
    let sum = numbers.reduce((acc, curr) => {
      acc += curr*curr
      return acc
    }, 0)
    
    return sum
  }



  // One liner

  const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0)