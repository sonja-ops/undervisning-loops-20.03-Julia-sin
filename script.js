/*
//OPPGAVE.1, While loop
1. Gå til linje utenfor kommentar og skriv av while loopen som er laget,
2. se på console.log hva som skjer
3. Vi går igjennom koden når alle har skrevet ferdig


KODE DERE SKAL SKRIVE AV:

let countdown = 5;

while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

console.log('Blast off!');
*/
// SKRIV UNDER HER

let countdown = 5;

while (countdown > 0){
  console.log(`Countdown:${countdown}`);
  countdown--;
}

console.log(`Blast off!`);

/*
//OPPGAVE.2, For loop
1. Gå til linje utenfor kommentar og skriv av for loopen, 
se på console.log hva som skjer
2. Vi går igjennom koden når alle har skrevet ferdig


KODE DERE SKAL SKRIVE AV:

const number = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
*/
// SKRIV UNDER HER

const number =7;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

/*
//OPPGAVE.3, forEach

1. Gå til linje utenfor kommentar og skriv av forEach loopen, 
se på console.log hva som skjer
2. Vi går igjennom koden når alle har skrevet ferdig

KODE DERE SKAL SKRIVE AV:

let shoppingList = ['milk', 'bread', 'fish', 'egg'];

shoppingList.forEach((item) => {
  console.log(item);
});
*/
// SKRIV UNDER HER

let shoppingList = [`milk`, `bread`, `fish`, `egg`];
shoppingList.forEach((item) => {
  console.log(item);
});

shoppingList.forEach((item) => {
  let newElement = document.createElement(`h1`);
  newElement.textContent = item;
  document.body.appendChild(newElement);
});

/*
//OPPGAVE.4, map

1.Gå til linje utenfor kommentar og skriv av map funksjonen som er laget
2. se på console.log hva som skjer
3. Vi går igjennom koden når alle har skrevet ferdig

KODE DERE SKAL SKRIVE AV:

const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);
console.log(numbers);
*/
// SKRIV UNDER HER

const numbers = [1, 2, 3];
const doubled = numbers.map((number) => number * 2);

console.log(doubled);
console.log(numbers);

