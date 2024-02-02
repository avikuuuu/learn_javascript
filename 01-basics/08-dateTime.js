let datetime = new Date();


console.log(datetime.toString())
console.log(datetime.toISOString())
console.log(datetime.toJSON())
console.log(datetime.toLocaleString())

console.log(typeof datetime);

let ydate=new Date(2023,0,23)
console.log(ydate.toLocaleString());


let mydate=Date.now()
console.log(mydate.toLocaleString());
console.log(ydate.getTime());
