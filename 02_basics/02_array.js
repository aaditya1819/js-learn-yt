const marvel_heroes = ["thor","iron-man","spiderman"]

const dc = ["batman","superman"]

// marvel_heroes.push(dc);
// console.log(marvel_heroes);


// const new_heroes = marvel_heroes.concat(dc);
// console.log(new_heroes);


// const all_new_heores = [...marvel_heroes,...dc]


// console.log(all_new_heores);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)


console.log(real_another_array);


console.log(Array.isArray("aaditya"));
console.log(Array.from("aaditya"));
console.log(Array.from({name: "aaditya"})); //intresting 


let score1 = 100 
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2,score3));


