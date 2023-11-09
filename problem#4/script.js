
function createMultiplier(multiplier) {
    return function(number) {
      return number * multiplier;
    }
  }
  
  const five = createMultiplier(5);

  console.log(five(10))
