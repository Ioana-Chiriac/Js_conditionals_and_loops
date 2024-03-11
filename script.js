let isChoreDone = true;
let hasEaten = false;

if(isChoreDone && hasEaten) {
    console.log (`te poti uita la desene!`);
}

if(!isChoreDone || !hasEaten) {
    if (!isChoreDone) {
        console.log(`Inca mai ai de lucru !poti sa te uiti la desene dupa ce termeni treaba`)
    }

}


// if.. else.. if else

let numer = -13;

if(numer > 0) {
    console.log(`numarul este pozitiv`);

} else if ( numer < 0) {
    console.log(`numarul este negativ`)
} else if ( numer = 0) {
    console.log (` numarul este zero `)
};

const dayOfTheWeek = 1 ;
switch (dayOfTheWeek) {
    case 1:
        console.log(`ziua este luni`)
        break;
    case 2:
            console.log(`ziua saptamaii este Marti`)
            break;
    case 3:
        console.log(`nu stiu ce zi este azi`)
        break;        
}

// bucle 
const numbers = [2, 99, 34, 25, 1];
let smallestNumber = Number.MAX_SAFE_INTEGER;
let currentIndex = 0;

while (currentIndex < numbers.length) {
    if ( numbers[currentIndex]< smallestNumber) {
        smallestNumber = numbers[currentIndex];

    }
     currentIndex++
}

console.log(`cel mai mic numar din lista este:`, smallestNumber);

// bucle - do .. while

let n = 10;
let num = 0;
do {
    num++;
    console.log(num);

} while (num < n);

// for

let times = 10;
for (let i = 0; i < 10; i++) {
    console.log(`hello ${i}!`);

}

let smallestNr = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallestNr) {
        smallestNr = numbers[i];
    }
}
console.log(`cel mai mic numar din lista este :`, smallestNr);
