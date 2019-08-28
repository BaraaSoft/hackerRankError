
const getArrayCombinations = (index, inArry, combination) => {
    const size = inArry.length;
    const subArry = inArry.slice(index, (index + combination));
    const upto = Math.abs(size - combination)
    if (index >= upto) {
        return [subArry];
    }
    return [subArry, ...getArrayCombinations(index + 1, inArry, combination)];
}


const sum = (inArry) => {
    return inArry.reduce((accumulator, currentValue) => {
        return accumulator + sumArry(currentValue)
    }, 0)
}

const sumArry = (inArry) => {
    return inArry.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function subarraySum(arr) {
    let result = 0;
    const combNum = arr[0]
    let arry = [...arr].slice(-combNum);
    for (let index = 1; index <= combNum; index++) {
        const combArr = getArrayCombinations(0, arry, index);
        const combSum = sum(combArr);
        result += combSum;
    }

    return result;

}

let test1 = [
    25,
    96,
    13,
    7,
    2,
    81,
    72,
    39,
    45,
    5,
    88,
    47,
    23,
    60,
    81,
    54,
    46,
    63,
    52,
    41,
    57,
    2,
    87,
    90,
    28,
    93
];

const test2 = [3, 1, 1, 1]

console.log(subarraySum(test2))