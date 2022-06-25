const example = {
    firstName: "Manideep",
    lastName: "Paul"
}

console.log(`${example.firstName} ${example.lastName}`)
delete example.lastName
console.log(`${example.firstName} ${example.lastName}`)