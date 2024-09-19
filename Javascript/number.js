// number constructor
let x = 345.7
let fun = x.constructor
console.log(fun);
// function :number

// check integer number
let integ = Number.isInteger(x)
console.log(integ);
// 34.7 return false ,34 return true

// safe integers
let safe = Number.isSafeInteger(x)
console.log(safe);
// 34.7 return false , 34 return true


