//Methods of Array
//toString
var name = ["Raj", "Aaras", "Aaravi", "Om"];
document.getElementById("demo").innerHTML = name.toString();

//join
var name1 = ["Raj", "Aaras", "Aaravi", "Om"];
document.getElementById("test").innerHTML = name1.join("*");

//pop
var name2 = ["Raj", "Aaras", "Aaravi", "Om"];
document.getElementById("mock").innerHTML = name2.pop();

//push
var name3 = ["Raj", "Aaras", "Aaravi", "Om"];
document.getElementById("net").innerHTML = name3.push("kiwi");

//shift
var name4 = ["Raj", "Aaras", "Aaravi", "Om"];
document.getElementById("nock").innerHTML = name4.shift("Rekha");

//unshift
var name5 = ["Raj", "Aaras", "Aaravi", "Om"];
document.getElementById("nest").innerHTML = name5.unshift("lemo");


//methods of String
//lenght
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("len").innerHTML = txt.length;

//indexOf
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("index").innerHTML = txt.indexOf("locate");

//LastIndexOf
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
document.getElementById("Liof").innerHTML = pos;

//search
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
document.getElementById("srch").innerHTML = pos;