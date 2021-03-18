const superheroes = [
{
"name": "Batman",
"publisher": "DC Comics",
"alter_ego": "Bruce Wayne",
"first_appearance": "Detective Comics #27",
"weight": "210"
},
{
"name": "Superman",
"publisher": "DC Comics",
"alter_ego": "Kal-El",
"first_appearance": "Action Comics #1",
"weight": "220"
},
{
"name": "Flash",
"publisher": "DC Comics",
"alter_ego": "Jay Garrick",
"first_appearance": "Flash Comics #1",
"weight": "195"
},
{
"name": "Green Lantern",
"publisher": "DC Comics",
"alter_ego": "Alan Scott",
"first_appearance": "All-American Comics #16",
"weight": "186"
},
{
"name": "Green Arrow",
"publisher": "DC Comics",
"alter_ego": "Oliver Queen",
"first_appearance": "All-American Comics #16",
"weight": "195"
},
{
"name": "Wonder Woman",
"publisher": "DC Comics",
"alter_ego": "Princess Diana",
"first_appearance": "The Incredible Hulk #180",
"weight": "165"
},
{
"name": "Blue Beetle",
"publisher": "DC Comics",
"alter_ego": "Dan Garret",
"first_appearance": "Mystery Men Comics #1",
"weight": "145"
},
{
"name": "Spider Man",
"publisher": "Marvel Comics",
"alter_ego": "Peter Parker",
"first_appearance": "Amazing Fantasy #15",
"weight": "167"
},
{
"name": "Captain America",
"publisher": "Marvel Comics",
"alter_ego": "Steve Rogers",
"first_appearance": "Captain America Comics #1",
"weight": "220"
},
{
"name": "Iron Man",
"publisher": "Marvel Comics",
"alter_ego": "Tony Stark",
"first_appearance": "Tales of Suspense #39",
"weight": "250"
},
{
"name": "Thor",
"publisher": "Marvel Comics",
"alter_ego": "Thor Odinson",
"first_appearance": "Journey into Myster #83",
"weight": "200"
},
{
"name": "Hulk",
"publisher": "Marvel Comics",
"alter_ego": "Bruce Banner",
"first_appearance": "The Incredible Hulk #1",
"weight": "1400"
},
{
"name": "Wolverine",
"publisher": "Marvel Comics",
"alter_ego": "James Howlett",
"first_appearance": "The Incredible Hulk #180",
"weight": "200"
},
{
"name": "Daredevil",
"publisher": "Marvel Comics",
"alter_ego": "Matthew Michael Murdock",
"first_appearance": "Daredevil #1",
"weight": "200"
},
{
"name": "Silver Surfer",
"publisher": "Marvel Comics",
"alter_ego": "Norrin Radd",
"first_appearance": "The Fantastic Four #48",
"weight": "unknown"
}
]
// 1. Maak array met alle superhelden namen:
const names = superheroes.map(item => {
  return item.name;
});
console.log(names);
// result: ["Batman", "Superman", "Flash", "Green Lantern", "Green Arrow", "Wonder Woman", "Blue Beetle", "Spider Man", "Captain America", "Iron Man", "Thor", "Hulk", "Wolverine", "Daredevil", "Silver Surfer"]


// 2. Maak een array van alle superhelden onder de 190 pounds:
const lightWeights = superheroes.filter(item => item.weight < 190);
console.log(lightWeights);
//result:
//0: {name: "Green Lantern", publisher: "DC Comics", alter_ego: "Alan Scott", first_appearance: "All-American Comics #16", weight: "186"}
//1: {name: "Wonder Woman", publisher: "DC Comics", alter_ego: "Princess Diana", first_appearance: "The Incredible Hulk #180", weight: "165"}
//2: {name: "Blue Beetle", publisher: "DC Comics", alter_ego: "Dan Garret", first_appearance: "Mystery Men Comics #1", weight: "145"}
//3: {name: "Spider Man", publisher: "Marvel Comics", alter_ego: "Peter Parker", first_appearance: "Amazing Fantasy #15", weight: "167"}

// 3. Maak een array met de namen van de superhelden die 200 pounds wegen:
const hero200 = superheroes.filter(item => item.weight == 200).map(item => {
  return item.name
});
console.log(hero200);
//result: ["Thor", "Wolverine", "Daredevil"]


// 4. Maak een array met alle comics waar superhelden hun first appearances hebben gehad:
const firstAppearance = superheroes.map(item => item.first_appearance);
console.log(firstAppearance);


// 5. Maak array met alle DC Comics superhelden en met alle Marvel Comics superhelden:
const heroesDC = superheroes.filter(item => item.publisher == "DC Comics");
const heroesMarvel = superheroes.filter(item => item.publisher == "Marvel Comics");
console.log(heroesDC);
console.log(heroesMarvel);

// 6. Tel het gewicht van alle DC superheroes bij elkaar op:
const weightHeroesDC = heroesDC.map(item => item.weight).map(Number).reduce((total, item) => {
  return item + total
});
console.log(weightHeroesDC);

// 7. Tel het gewicht van alle Marvel superheroes bij elkaar op:
const weightHeroes = heroesMarvel.map(item => {
  if (item.weight !== "unknown") {
    return parseInt(item.weight);
  } else {
    return 0;
  }
})
const totalMarvelWeight = weightHeroes.reduce((total, item) => {
  return total + item
});
console.log(totalMarvelWeight);

// 8. 
const displayHighestWeight = items => {
  let weights = (items.map((item) => item.weight)).map(Number);
  console.log(weights);
}
console.log(displayHighestWeight(superheroes));