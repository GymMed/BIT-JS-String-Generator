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
    minValue = minValueDom.value;
    maxValue = maxValueDom.value;
    setArrayLength = arrayLengthDom.value;

    generatedRandomArrayFirst = generateRandomArray(
        [minValue, maxValue],
        setArrayLength
    );
    generatedRandomArraySecond = generateRandomArray(
        [minValue, maxValue],
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
