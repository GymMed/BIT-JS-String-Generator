const minValueDom = document.querySelector("#minValue");
const maxValueDom = document.querySelector("#maxValue");
const arrayLengthDom = document.querySelector("#arrayLength");
const twoArraysFirstResultsDom = document.querySelector(
    "#generate-two-arrays-first-results"
);
const twoArraysSecondResultsDom = document.querySelector(
    "#generate-two-arrays-second-results"
);
const twoArraysButtonDom = document.querySelector("#generate-two-arrays-btn");

let minValue = 100;
let maxValue = 999;
let setArrayLength = 100;

minValueDom.value = minValue;
maxValueDom.value = maxValue;
arrayLengthDom.value = setArrayLength;

let generatedRandomArrayFirst = [];
let generatedRandomArraySecond = [];

twoArraysButtonDom.addEventListener("click", function () {
    minValue = parseFloat(minValueDom.value);
    maxValue = parseFloat(maxValueDom.value);
    setArrayLength = arrayLengthDom.value;
    const minMaxValues = [minValue, maxValue];

    generatedRandomArrayFirst = generateRandomArray(
        minMaxValues,
        setArrayLength
    );
    generatedRandomArraySecond = generateRandomArray(
        minMaxValues,
        setArrayLength
    );

    // pass array to pass it as a reference instead
    // of making 899 copies of min and max values
    // constructing class and passing instance
    // would be the best way . . .
    console.log(generatedRandomArrayFirst);
    console.log(generatedRandomArraySecond);

    let firstOutput = `First array: <br>"${generatedRandomArrayFirst.join(
        ", "
    )}"`;
    let secondOutput = `Second array: <br>"${generatedRandomArrayFirst.join(
        ", "
    )}"`;

    makeDomSuccess(twoArraysFirstResultsDom, firstOutput);
    makeDomSuccess(twoArraysSecondResultsDom, secondOutput);
});
