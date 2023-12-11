const combinedArraysValuesResultsDom = document.querySelector(
    "#combine-arrays-values-results"
);
const combinedArraysValuesButtonDom = document.querySelector(
    "#combine-arrays-values-btn"
);

let combinedArraysValues = [];

combinedArraysValuesButtonDom.addEventListener("click", function () {
    generatedRandomArrayFirst;
    generatedRandomArraySecond;

    if (
        !isArrayAndNotEmpty(generatedRandomArrayFirst) ||
        !isArrayAndNotEmpty(generatedRandomArraySecond)
    ) {
        makeDomFailiure(
            combinedArraysValuesResultsDom,
            "You need to firstly generate two arrays in order to make array from both of them!"
        );
        return;
    }

    combinedArraysValues = combineArraysByIndexAndValue(
        generatedRandomArrayFirst,
        generatedRandomArraySecond
    );

    const indexValueStrings =
        arrayToStringWithIndexesAndValues(combinedArraysValues);

    console.log(combinedArraysValues, indexValueStrings);
    let output = `Made array: <br>"${indexValueStrings}"`;

    makeDomSuccess(combinedArraysValuesResultsDom, output);
});

function combineArraysByIndexAndValue(firstArray, secondArray) {
    const outputArray = [];

    if (
        !isArrayAndNotEmpty(generatedRandomArrayFirst) ||
        !isArrayAndNotEmpty(generatedRandomArraySecond)
    ) {
        return outputArray;
    }

    const arrayLength =
        firstArray.length > secondArray.length
            ? firstArray.length
            : secondArray.length;

    for (let currentIndex = 0; currentIndex < arrayLength; currentIndex++) {
        if (
            !firstArray.hasOwnProperty(currentIndex) ||
            !secondArray.hasOwnProperty(currentIndex)
        )
            continue;

        outputArray[firstArray[currentIndex]] = secondArray[currentIndex];
    }

    return outputArray;
}

function arrayToStringWithIndexesAndValues(array) {
    const resultString = array
        .map((value, index) =>
            value !== undefined ? `${index}: ${value}` : null
        )
        .filter(Boolean)
        .join(", ");

    return resultString;
}
