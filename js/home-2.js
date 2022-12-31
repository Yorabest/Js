//1 i 2
const k1 = Number.parseInt("5px");
const k2 = Number.parseInt("12djd334");
const k3 = Number.parseInt("12.45asdwe12");
const k4 = Number.parseInt("qwqweeewq");

console.log(k1);
console.log(k2);
console.log(k3);
console.log(k4);

const k5 = Number.parseFloat("5px");
const k6 = Number.parseFloat("12djd334");
const k7 = Number.parseFloat("12.45asdwe12");
const k8 = Number.parseFloat("qwqweeewq");

console.log(k5);
console.log(k6);
console.log(k7);
console.log(k8);

console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, 99, 3, 22, 6, 733, 18));

const random = Math.random() * (19 - 3) + 3;
console.log(random);

const result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

const email = "melnichenko.cofia07@gmail.com"
console.log(email.includes("@"));
console.log(email.length);



const my = "My";
const name = "name";
const is = "is";
const fullName = `${my} ${name} ${is} Viktor`;
console.log(fullName);

const userName = "Тобіо";
const payment = 999;
alert("Дякуємо, Тобіо! До сплати 999 гривень")