const example = (num) => {
    let greet;
    switch(num){
        case 1:
            greet = "Good Morning";
            break;
        case 2: 
            greet = "Good Afternoon";
            break;
        case 3: 
            greet = "Good Evening";
            break;
        case 4:
            greet = "Good Night";
            break;
        default:
            greet = "Hi there!!"
    }
    return greet;
}

console.log(example(0))