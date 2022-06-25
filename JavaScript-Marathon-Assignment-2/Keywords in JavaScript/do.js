const example = () => {
    let loading = 0;
    do {
        console.log(`Loading${".".repeat(loading+1)}`)
        loading++
    }
    while(loading < 3)
}

example()