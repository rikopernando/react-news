// Destructur Object

const person = {
  name: 'Riko',
  age: 22,
  location: {
    city: 'Jakarta',
    temp: 13
  }
}

console.log(`Destructur Object`)
const { name : firstName = 'Anonymous' , age } = person
console.log(`${firstName} is ${age}`)

const { city, temp : temperatur } = person.location

if(city && temperatur){
  console.log(`${city} is ${temperatur}`)
}

console.log()
// Destructur Array
console.log(`Destructur Array`)

const programLanguage = []

const [, , ruby = 'Rubbbuuuuuu'] = programLanguage

console.log(`${ruby}`)


const a = ({b = 1,c}) => {
  return b + c
}

console.log(a({ b: 7, c: 2}))
