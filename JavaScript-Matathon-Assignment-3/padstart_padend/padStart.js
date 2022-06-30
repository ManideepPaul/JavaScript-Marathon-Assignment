const accountNumber = "12345678902343";
const lastFourD = accountNumber.slice(-4);
const hiddenAcc = lastFourD.padStart(accountNumber.length, "*")

console.log(hiddenAcc)