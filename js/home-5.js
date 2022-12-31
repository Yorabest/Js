const Arr1 = [1, 5, "4", "hello"];
const Arr2 = [true, 2, {}, ["a"], 222];
console.log(Arr1[2]);
console.log(Arr2[2]);
console.log(Arr1[2] + Arr2[2]);
Arr1.splice(4, 0, 22)

for (const Arr of Arr1) {
    console.log(Arr);
}
for (const Arr3 of Arr2) {
    console.log(Arr3);
    console.log(typeof Arr3)
}

const message = 'Welcome to Ukraine!';
const word = message.split('')
console.log(word);
console.log(word.indexOf("l"));
const messageTwo = word.join("");
console.log(messageTwo);

const styles = ["Джаз", "Блюз"]
styles.push("Рок-н-рол")
styles.splice(1, 1, "Класика")
console.log(styles.splice(0, 1));
styles.unshift('Реп', 'Реггі');
console.table(styles);

const promtCountry = prompt("Країна");
const country = ["Китай", "Чилі", "Австралія", "Індія", "Ямайка"];
const price = [100, 250, 170, 80, 120];
let endPrice = 0;
switch (promtCountry) {
    case country[0]:

        endPrice = price[0]

        break;
    
         case country[1]:

         endPrice = price[1]
        
        break;
     
     case country[2]:

        endPrice = price[2]

        break;
    
     case country[3]:

        endPrice = price[3]

        break;
    
     case country[4]:

        endPrice = price[4]

        break;

 
}
 if (endPrice === 0) {
    console.log("У вашій країні доставка не доступна")
 } else {
    console.log(`Доставка в ${promtCountry} буде коштувати ${endPrice} кредитів `);
 }