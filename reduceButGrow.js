// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:



function grow(x){
    return x.reduce((acc, curr) => {
      acc *= curr
      return acc
    }, 1)
   }

// used the reduce method to multiply all elements in an array