function getUniqueArraysCount(array, uniqueArraysStorage = []) {
    if (!Array.isArray(uniqueArraysStorage))
        throw new Error(
            "Received " + typeof uniqueArraysStorage + " instead of array!"
        );

    let totalUniqueCombos = 0;

    for (
        let currentElement = 0;
        currentElement < array.length;
        currentElement++
    ) {
        if (!arrayIncludesValue(uniqueArraysStorage, array[currentElement])) {
            uniqueArraysStorage.push(array[currentElement]);
            totalUniqueCombos++;
        }
    }

    return totalUniqueCombos;
}

//the same as array.includes(value) method but custom made
function arrayIncludesValue(array, value) {
    for (
        let currentElement = 0;
        currentElement < array.length;
        currentElement++
    ) {
        if (array[currentElement] === value) {
            return true;
        }
    }

    return false;
}

function getCombinedArrayOfArrays(arrayOfArrays) {
    const combinedArray = [];
    let currentElement = 0;

    for (
        let currentArray = 0;
        currentArray < arrayOfArrays.length;
        currentArray++
    ) {
        for (
            currentElement = 0;
            currentElement < arrayOfArrays[currentArray].length;
            currentElement++
        ) {
            if (combinedArray.hasOwnProperty(currentElement)) {
                combinedArray[currentElement] +=
                    arrayOfArrays[currentArray][currentElement];
            } else {
                combinedArray.push(arrayOfArrays[currentArray][currentElement]);
            }
        }
    }

    return combinedArray;
}

function generateStringFromArrayFillCounts(array, arrayCounts, stringLength) {
    let output = "";
    let randomNumber = 0;
    fillArray(arrayCounts, array.length);

    for (let currentLetter = 0; currentLetter < stringLength; currentLetter++) {
        randomNumber = rand(0, array.length - 1);
        output += array[randomNumber];
        arrayCounts[randomNumber]++;
    }

    return output;
}

function fillArray(array, arrayLength, filledWith = 0) {
    for (
        let currentElement = 0;
        currentElement < arrayLength;
        currentElement++
    ) {
        array.push(filledWith);
    }

    return array;
}
