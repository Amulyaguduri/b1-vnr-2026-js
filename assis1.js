


//compare two numbers
let num1 = Number(process.argv[2])
let num2 = Number(process.argv[3])
if (num1 > num2) {
    console.log(num1, "is greater than", num2)
} else if (num2 > num1) {
    console.log(num2, "is greater than", num1)
} else {
    console.log("Both numbers are equal")
}   


//compare three numbers
let num3 = Number(process.argv[2])
let num4 = Number(process.argv[3])
let num5 = Number(process.argv[4])
if (num3 > num4 && num3 > num5) {
    console.log(num3, "is the greater than", num4, "and", num5)
} else if (num4 > num3 && num4 > num5) {
    console.log(num4, "is the greater than", num3, "and", num5)
} else {
    console.log(num5, "is the greater than", num3, "and", num4)
}

