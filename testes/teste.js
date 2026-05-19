const num1 = 121
const num2 = 123
const num3 = 11211
let num = []
num.push(num1, num2, num3)
for (let i = 0; i < num.length; i++) {
    if ((num[i].toString().split("").reverse().join()) === (num[i].toString().split("").join())) { console.log("true", num[i]) } else { console.log("false", num[i]) }
}