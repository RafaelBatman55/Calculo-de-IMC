const name = "Rafael"
const weight = 76
const height = 1.87

const imc = weight / (height * height)

if (imc >= 30) {
    console.log('--------  CALCULATING --------')
    console.log(`Be careful, ${name}! Your IMC is ${imc}! You are overweight!`)
} else {
    console.log('--------  CALCULATING --------')
    console.log(`Don't worry, ${name}. Your IMC is ${imc}. You are not overweight.`)
}