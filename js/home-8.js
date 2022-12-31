// 1

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};


user.mood = 'happy';
user.premium = false;
user.hobby = 'skydiving';

const keys = Object.keys(user)
for (const key of keys) {
  const name = key;
  const voul = user[key]
  console.log(`${name}: ${voul}`);
}

// 2

const countProps = function (obj) {
  let totalProps = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    totalProps += 1
  }
  return totalProps
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

// 3

const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  let bestResult = 0;
  let bestEmployment = "";
  for (const key of keys) {
    if (employees[key] > bestResult) {
      bestResult = employees[key];
      bestEmployment = key
    };
  }
  return bestEmployment
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

// 4

const countTotalSalary = function (employees) {
  const values = Object.values(employees);
  let totalSalary = 0;
  for (const value of values) {
    totalSalary += value;
  };
  return totalSalary
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

// 5

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const values = [];
  for (const obj of arr) {
    if (obj[prop] !== undefined) {
      values.push(obj[prop]);
    }
  }
  return values;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

// 6

const products2 = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice = 0;
  for (const product of allProdcuts) {
    if (product.name ===  productName) {
      totalPrice = product.price * product.quantity;
    };
  };
  return totalPrice;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(calculateTotalPrice(products2, 'Радар')); // 5200

console.log(calculateTotalPrice(products2, 'Дроїд')); // 2800