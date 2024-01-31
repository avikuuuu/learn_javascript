const name ="hey"
const num=23

//old method to do so
// console.log(name +num); 

// console.log(`my name is ${name} and my number is ${num}`);   modern way of using it 


const game= new String("hello-BUddy")

// console.log(game.charAt(2));
// console.log(game.length);
// console.log(game.toLowerCase());
// console.log(game.substring(0,4));
const another=game.slice(0,5)
console.log(another);
// console.log(game.);
// console.log(game.);

const url = "https://hitesh.com/hitesh%20choudhary" 
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(game.split('-'));