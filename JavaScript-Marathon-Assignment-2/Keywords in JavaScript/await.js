async function example() {
    let Prom = new Promise((res, rej) => {
        res("await is working");
    });
    let value = await Prom;
    return console.log(value);
}

example()