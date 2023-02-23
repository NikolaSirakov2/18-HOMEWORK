const getV = () => {
    let count = 1;

    return {
        increase: (val=1) =>{
        count += val;
    },
    getVal: () =>{
        return count;
    }
}
}

const test = getV();

console.log(test.getVal());
test.increase();
console.log(test.getVal());

console.dir(test.getVal)
