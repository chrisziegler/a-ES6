

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

for (var i = 0; i < images.length; i++) {
    var area = images[i].height * images[i].width;
    areas.push(area);
}

images.forEach((item) => {
    let area = item.height * item.width;
    areas.push(area);

})
console.log(areas);

