const repeatingArrayResultsDom = document.querySelector(
    "#generate-repeating-array-results"
);
const repeatingArrayButtonDom = document.querySelector(
    "#generate-repeating-array-btn"
);

const repeatingArray = [];

repeatingArrayButtonDom.addEventListener("click", function () {
    generatedRandomArrayFirst;
    generatedRandomArraySecond;

    if (
        !isArrayAndNotEmpty(generatedRandomArrayFirst) ||
        !isArrayAndNotEmpty(generatedRandomArraySecond)
    ) {
        makeDomFailiure(
            repeatingArrayResultsDom,
            "You need to firstly generate two arrays in order to form array repeating elements!"
        );
        return;
    }

    repeatingArray.splice(0, repeatingArray.length);

    let totalRepeatingElements = getRepeatingElementsInArrays(
        [generatedRandomArrayFirst, generatedRandomArraySecond],
        repeatingArray
    );

    console.log(totalRepeatingElements, repeatingArray);
    let output =
        `Total repeating elements: ${totalRepeatingElements}` +
        `<br>Repeating array: <br>"${repeatingArray.join(", ")}"`;

    makeDomSuccess(repeatingArrayResultsDom, output);
});

function getRepeatingElementsInArrays(arrayOfArrays, outputRepeatingArray) {
    let currentElement = 0;
    let totalRepeatingElements = 0;

    for (const array in arrayOfArrays) {
        for (
            currentElement = 0;
            currentElement < arrayOfArrays[array].length;
            currentElement++
        ) {
            if (
                arraysInArrayIncludesValues(
                    arrayOfArrays,
                    arrayOfArrays[array][currentElement]
                ) &&
                !outputRepeatingArray.includes(
                    arrayOfArrays[array][currentElement]
                )
            ) {
                outputRepeatingArray.push(arrayOfArrays[array][currentElement]);
                totalRepeatingElements++;
            }
        }
    }

    return totalRepeatingElements;
}

function arraysInArrayIncludesValues(arrayOfArrays, value) {
    let valueOccurances = 0;

    for (const array in arrayOfArrays) {
        if (arrayOfArrays[array].includes(value)) {
            valueOccurances++;

            if (valueOccurances > 1) return true;
        }
    }

    return false;
}
