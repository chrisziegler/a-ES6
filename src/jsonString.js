const myData = '{ "name":"CSS Grid Layout", "date": "3-29-17", "site":"Egghead.io"}'


/* Example how JSON.parse works and what parsing data does
myData is in JSON format, but it is not JSON unless it is in
a string to simulate how it is sent via a server
parsing it simply turns it into a JavaScript object */

const myObj = JSON.parse(myData)
const el = document.getElementById('demo')
el.innerHTML = `This is a ${myObj.name} tutorial from ${myObj.site} done on ${myObj.date}`
