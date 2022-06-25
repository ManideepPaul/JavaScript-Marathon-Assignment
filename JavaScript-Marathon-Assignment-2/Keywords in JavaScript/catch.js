const example = (num) => {
    try {
        consle.log(num) //Because there is a typo the catch will console log the error message.
    }
    catch(err) {
        console.log(err.message)
    }
}

example(5)