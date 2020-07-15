var a = {name : "Aaras", age : "21", city : "Badlapur"}
var b = {name : "Aaravi", age : "22", city : "Thane"}
var c = {name : "Aaru", age : "23", city : "Kalyan"}

console.time("Time Taken");
console.log("hey!!");
console.error("An Error Occured");
console.warn("It's a Warning to you!!!");

console.log({a,b,c});
console.table({a,b,c});
console.log("%c custom messege", "color:blue");
console.timeEnd("Time Taken");