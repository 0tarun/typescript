type point = [number, number];
const location1: point = [10, 20];
const dhakaLocation: point = [23.8103, 90.4125];

console.log(location1);
console.log(dhakaLocation);

type player = [string, number, boolean];
const players: player[] = [
    ["Rudra Kumar Das", 10, true],
    ["Tarun Chandra Das", 20, false],
    ["Abir Chandra Das", 30, true]
];


type item = readonly [string, number];
const items: item[] = [
    ["Apple", 10],
    ["Banana", 20],
    ["Mango", 30]
]
items.push(["Orange", 40]);
items.push(["Grapes", 50]);
items.push(["pineapple", 60]);
console.log(items);
