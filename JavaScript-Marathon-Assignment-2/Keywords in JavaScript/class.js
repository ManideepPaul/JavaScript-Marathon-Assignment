class Example {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const fullName = new Example("Manideep", "Paul")

console.log(`${fullName.firstName} ${fullName.lastName}`);