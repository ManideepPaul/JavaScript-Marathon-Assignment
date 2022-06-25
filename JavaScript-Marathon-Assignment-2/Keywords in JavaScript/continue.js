const example = (num) => {
    for(i = 1; i <= num; i++){
        if(i === 5){
            console.log("Continue");
            continue; //continue helps break one iteration of the loop.
        }
        console.log(i)
    }
}

example(10)