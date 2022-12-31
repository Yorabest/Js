for (let i = 1; i <= 10; i++) {
   console.log(i);
}

for (let i = 1; i <= 10; i += 1){
    const IDK = i % 2 === 0 ? "Число парне" : "Число непарне";
    console.log(IDK);
}

let num = 20;
while (num < 28) {
    num += 1;
    console.log(num);
}

const name = prompt("Введіть ім’я  героя");
if (name.length < 6) {
    console.log(name);
}
