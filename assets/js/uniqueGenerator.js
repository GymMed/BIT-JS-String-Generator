function generateRandomArray(valueTypes, arrayLength) {
    const uniqueArray = [];

    if (
        valueTypes.length !== Object.keys(VALUES_TYPES_ENUM).length ||
        valueTypes[VALUES_TYPES_ENUM.Max] - valueTypes[VALUES_TYPES_ENUM.Min] <
            arrayLength
    )
        throw new Error("Provided not valid input!");

    recursiveRandomFiller(valueTypes, uniqueArray, 0, arrayLength);

    return uniqueArray;
}

function recursiveRandomFiller(
    valuesPossabilities,
    array,
    fillIndex,
    fillLength
) {
    if (fillIndex > fillLength - 1) return;

    let randomNumber = rand(
        valuesPossabilities[VALUES_TYPES_ENUM.Min],
        valuesPossabilities[VALUES_TYPES_ENUM.Max]
    );

    console.log(
        randomNumber,
        valuesPossabilities[VALUES_TYPES_ENUM.Min],
        valuesPossabilities[VALUES_TYPES_ENUM.Max]
    );

    if (!arrayIncludesValue(array, randomNumber)) {
        array.push(randomNumber);
        fillIndex++;
    }
    recursiveRandomFiller(valuesPossabilities, array, fillIndex, fillLength);
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

//enum created to store
const VALUES_TYPES_ENUM = {
    Min: 0,
    Max: 1,
};
