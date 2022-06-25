const example = (num) => {
    for(i = 1; i <= num; i++){
        if(i === 5){
            console.log("Break");
            break;
        }
        console.log(i)
    }
}

example(10)