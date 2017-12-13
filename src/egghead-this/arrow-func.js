
// an arrow function does not have its own this
// const outerThis = this;

// const func = () => {
//   console.log(this === outerThis);
// };
// func(); // true

// const counter = {
//   count: 0,
//   incrementPeriodically() {
//     setInterval(function() {
//       console.log(++this.count);
//     }, 1000);
//   }
// };
// counter.incrementPeriodically(); // NaN NaN NaN...

// Let's convert our count function to an arrow function
const counter = {
  count: 0,
  incrementPeriodically() {
    setInterval(() => {
      console.log(this.count += 1); // eslint doesn't like ++this.count
    }, 1000);
  }
};
counter.incrementPeriodically(); // 1, 2, 3...
