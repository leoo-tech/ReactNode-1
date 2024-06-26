let palavra1 = "carne assada";

for(let i = 0; i < palavra1.length; i++){
    console.log(palavra1[i]);
}


let palavra2 = "Java Script";

let palavra3 = "   Java Script   ";

let palavra4 = "Java Script";

// let palavraMin = palavra2.toLowerCase();

// console.log(palavra2.toUpperCase());

// console.log(palavraMin);

// console.log(palavra3.trim());

// console.log(palavra4.indexOf("S"));

// console.log(palavra4.lastIndexOf("S"));

console.log(palavra4.slice(0, 4));

console.log(palavra4.slice(5));

console.log(palavra4.replace("Java", "Type"));
console.log(palavra4.replace("J", "G"));