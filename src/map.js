

const paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
    let colors = array.map((item) => item[property]);
    return colors; 
}

let colorPluck = pluck(paints, 'color');
console.log(colorPluck);

const math = {
  'factorial': function factorial(n) {
    if (n <= 1)
      return 1;
    return n * factorial(n - 1);
  }
};

const factorial5 = math.factorial(5);
console.log(factorial5);