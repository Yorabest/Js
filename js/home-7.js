// 1

const hello1 = function () {
    console.log("Привіт JavaScript");
}

hello1()

// 2

const hello2 = function (name) {
    console.log(`Привіт ${name}`)
}
    
hello2("Василь")

// 3

const mull = function (n, m) {
    console.log(n * m);
    console.log(n + m);
    console.log(n - m);
}

mull(10, 2);

// 4

const myNewArrowFunction = (...rest) => rest;

console.log( myNewArrowFunction(1, 2, 3));
console.log(myNewArrowFunction(100, 200, 300, 400, 500));
console.log(myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"));

// 5

const myAverageScore = function (arr) {
    let sum = 0;

    for (const ars of arr) {
         sum += ars;
    }
    const score = sum / arr.length;

    if (91 <= score <= 100) {
    console.log("Myaveragescore: A");
   } else if(81 <= score <= 90) {
    console.log("Myaveragescore: B");
   } else if (71 <= score <= 80) {
       console.log("Myaveragescore: C");
   } else if (score <= 70) {
       console.log("Myaveragescore: D");
    }
}

myAverageScore([100, 75, 81, 96]);
myAverageScore([45, 63, 85, 70]);
myAverageScore([77, 82, 60, 58]);
myAverageScore([93, 99, 93, 96]);