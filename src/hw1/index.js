function numbersSum(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw Error('Invalid arguments');
    }

    return a + b;
}

function numberSumOrMultiply(a, b) {
    return a % 2 === 0 ? a * b : a + b;
}

function getCoordinateQuarter(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x > 0 && y < 0) {
        return 4;
    } else {
        throw Error('The point is on the axis');
    }
}

function calculateMaximumPlusThree(a, b, c) {
    const sum = a + b + c;
    const multiply = a * b * c;

    return 3 + (sum > multiply ? sum : multiply)
}

function getStudentMarkByRating(rating) {
    if(rating >= 0 && rating <= 19) {
        return 'F';
    } else if (rating >= 20 && rating <= 39) {
        return 'E';
    } else if (rating >= 40 && rating <= 59) {
        return 'D';
    } else if (rating >= 60 && rating <= 74) {
        return 'C';
    } else if (rating >= 75 && rating <= 89) {
        return 'B';
    } else if (rating >= 90 && rating <= 100) {
        return 'A';
    } else {
        throw Error('Rating is out of range 0 - 100');
    }
}

function getEvensSumInRangeFromOneToHundred () {
    return 2550;
}

function checkIsPrime(number) {
    if(number === 1 || number === 0) {
        return false;
    }

    for(let i = 2; i <= number / 2; i++) {
        if(number % i === 0) {
            return false;
        }
    }

    return true;
}

function squareRoot(number) {
    let root = 0;

    for(let i = 0; i * i <= number; i++) {
        root = i;
    }

    return root;
}

function squareRootBinary(number) {
    let left = 0;
    let right = number;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        if(mid * mid > number) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return right;
}

function factorial(number) {
    return number > 1 ? number * factorial(number - 1) : 1;
}

function countDigitsSum(number) {
    return number.toString().split('').reduce(function(sum, digit) {
       return sum + parseInt(digit);
    }, 0);
}

function reflect(number) {
    const resultStrign = number.toString().split('').reduce(function(acc, digit) {
       return  digit + acc;
    });

    return parseInt(resultStrign);
}

function getMinValue(array) {
    if (!array.length) {
        return null;
    }

    let minValue = array[0];

    for(let i = 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minValue = array[i];
        }
    }

    return minValue;
}

function getMaxValue(array) {
    if(!array || !array.length){
        throw Error('Invalid operation')
    }

    let minValue = array[0];

    for(let i = 1; i < array.length; i++) {
        if(array[i] > minValue) {
            minValue = array[i];
        }
    }

    return minValue;
}

function getMinValueIndex(array) {
    if(!array || !array.length) {
        throw Error('Invalid operation');
    }

    let index = 0;

    for(let i = 1; i < array.length; i++) {
        if(array[i] < array[index]) {
            index = i;
        }
    }

    return index;
}

function getMaxValueIndex(array) {
    if(!array || !array.length) {
        throw Error('Invalid operation');
    }

    let index = 0;

    for(let i = 1; i < array.length; i++) {
        if(array[i] > array[index]) {
            index = i;
        }
    }

    return index;
}