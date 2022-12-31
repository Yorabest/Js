// 1
const num = Number(prompt("Число, без нього ні - ні"));

const unsw = 54 < num && num < 100 ? "Число потрапляє в діапазон" : "Число не потрапляє в діапазон";
console.log(unsw);
// 2
const ageOfMax = 55;
if (0 <= ageOfMax && ageOfMax <= 16) {
    console.log("діти");
} else if (17 <= ageOfMax && ageOfMax <= 60){
    console.log("дорослі");
} else if (61 <= ageofMax && ageOfMax <= 100) {
    console.log("пенсіонери");
}
// 3
const name = "Sophia";
const sur = "Melnichenko";
const nameL = name.length;
const surL = sur.length;
const howMuch = name.length > 4 && sur.length > 5 ? name.length + sur.length :"УПС"
console.log(howMuch);
// 4
let random = parseInt( Math.random() * (5 - 1) + 1);
if (random = 1) {
    console.log(1);
} else if (random = 2){
    console.log(2);
} else if (random = 3) {
    console.log(3);
} else if (random = 4) {
    console.log(4);
} else if (random = 5) {
    console.log(5);
}
// 5

const lang = "ua";
switch (lang) {
    case "en":
        console.log("january");
        break;

    case "ua":
        console.log("січень");
        break;
    
    case "ru":
        console.log("январь");
        break;
    
    case "fr":
        console.log("janvser");
        break;
}