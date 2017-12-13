/* Destructuring */

//ASSIGN VARIABLES FROM OBJECTS
const voxel = {x: 3.6, y: 7.4, z: 6.54};
// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;

const {y} = voxel;
// const y = voxel.y;
console.log(y);
// PULL PROPERTIES OFF OBJECTS, COPY THEIR VALUE TO NEW VARIABLE
const {y: b} = voxel;
// const b = voxel.y;
console.log(b);
const {x, z} = voxel;
const{x: a, z: c} = voxel;
console.log(a);

// ASSIGN VARIABLES FROM NESTED OBJECTS
const nestObj = {
  start: {x: 5, y: 6},
  end: { x:6, y: -9}
};
const { start : { x: startX, y: startY}} = nestObj;
console.log('startX: ', startX, 'startY: ', startY);

// ASSIGN VARIABLES FROM ARRAYS
const [q,,, r] = [1, 2, 3, 4, 5];
console.log('q: ', q, 'r: ', r); // 1, 4
// REST OPERATOR TO REASSIGN ARRAY ELEMENTS
const [s, t, ...rest] = [1, 2, 3, 4, 5];
console.log('rest: ', rest); // [3, 4, 5]

// PASS AN OBJECT AS A FUNCTION'S PARAMETERS
// "a method has (uses within its function scope) parameters and takes in arguments."
const user = {
  name: 'Stan',
  age: 21,
  nationality: 'American',
  location: 'Pullman, WA'
 };

//INSTEAD OF DESTRUCTURING IN THE CODE BLOCK
// const profileUpdate = (profileData) => {
//   const {name, age, nationality, location } = profileData;
//   return `Welcome ${name}, you are a ${age} year old ${nationality} from ${location}`;
// };

// TAKE THAT DESTRUCTURING LINE AND PUT IT INTO FUNCTION PARAMETERS
const profileUpdate = ({name, age, nationality, location}) => {
  return `Welcome ${name}, you are a ${age} year old ${nationality} from ${location}`;
}
console.log(profileUpdate(user));