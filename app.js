//Serious Ex
//Ex1
// let height = Number(prompt("Enter your height (cm)"));
// let weight = Number(prompt("Enter your weight (kg)"));
// let height2 = height/100;
// let BMI = weight/(height2*height2);
// if (BMI < 16){
//     console.log("Severely underweight");
// }
// else if (BMI >= 16 && BMI < 18.5){
//     console.log("Underweight");
// }
// else if (BMI >= 18.5 && BMI < 25){
//     console.log("Normal");
// }
// else if (BMI >= 25 && BMI < 30){
//     console.log("Overweight");
// }
// else
//     console.log("Obese");

//Ex2
let n = Number(prompt("Enter a number"));
let s = 1;
for(let i = 1; i <= n; i++)
{
    s = s*i;
}
console.log(`The factorial of n is ${s}`);