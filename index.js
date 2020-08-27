///////////////////////////////////////1
let earthPopulation = 0;

data.map(el => earthPopulation += el.population);

// console.log(earthPopulation);

///////////////////////////////////2

let smallCountry = new Array (0);

data.filter(el => el.population < 1e6).map(el => smallCountry += el.population + ", ");

// console.log(smallCountry);

////////////////////////////////////////3

let bigCountry = new Array (0);

data.filter(el => el.population > 5e7).map(el => bigCountry += el.country + ", " );

// console.log(bigCountry);



