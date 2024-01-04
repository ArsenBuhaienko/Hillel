function myFN(a, b) {
    c = a + b
    return c
}
console.log(myFN(5,6))
console.dir(myFN)

const mutationPerson = {
    name: 'Bob',
    age: 21
 }


function increasePersonAge(person){
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age +=1
    return updatedPerson
}