function getArrayParams(...arr) {
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) { min = arr[i]; }
        if (arr[i] > max) { max = arr[i]; }
        sum += arr[i];
    }
    let avg = (Number)((sum / arr.length).toFixed(2));
    return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
    let sum = arr.reduce((sum, current) => sum + current, 0);
    return sum;
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { sumEvenElement += arr[i]; }
        else sumOddElement += arr[i];
    }
    return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
            countEvenElement += 1;
        }
    }
    return (sumEvenElement / countEvenElement);
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
        let result = func(...arrOfArr[i]);
        if (maxWorkerResult < result) {
            maxWorkerResult = result;
        }
    }
    return maxWorkerResult;
}
