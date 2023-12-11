const charsDom = document.querySelector("#chars");
const sizeDom = document.querySelector("#size");
const stringResultsDom = document.querySelector("#string-results");
const stringButtonDom = document.querySelector("#string-generate-btn");

const arrayCounts = [];
let generatedString = "";

let lettersToChoseFrom = "ABCD";
let stringSize = 200;

charsDom.value = lettersToChoseFrom;
sizeDom.value = stringSize;

stringButtonDom.addEventListener("click", function () {
    lettersToChoseFrom = charsDom.value.split("");
    stringSize = sizeDom.value;

    generatedString = generateStringFromArrayFillCounts(
        lettersToChoseFrom,
        arrayCounts,
        stringSize
    );

    stringResultsDom.textContent = generatedString;

    if (stringResultsDom.classList.contains("hidden"))
        stringResultsDom.classList.remove("hidden");
});

////sorting . . .
const sortResultsDom = document.querySelector("#string-sort-results");
const sortButtonDom = document.querySelector("#string-sort-btn");

sortButtonDom.addEventListener("click", function () {
    if (generatedString === "") {
        makeDomFailiure(
            sortResultsDom,
            "You need to generate string first to sort it!"
        );
        return;
    }

    let sortedString = generatedString.split("").sort().join("");
    console.log(generatedString, sortedString);

    makeDomSuccess(sortResultsDom, sortedString);
});

let generatedFirstString = (generatedSecondString = generatedThirdString = "");
let stringsArray = [];

const threeStringsFirstResultsDom = document.querySelector(
    "#three-strings-first-results"
);
const threeStringsSecondResultsDom = document.querySelector(
    "#three-strings-second-results"
);
const threeStringsThirdResultsDom = document.querySelector(
    "#three-strings-third-results"
);
const threeStringsButtonDom = document.querySelector("#three-strings-btn");

threeStringsButtonDom.addEventListener("click", function () {
    lettersToChoseFrom = charsDom.value.split("");
    stringSize = sizeDom.value;

    generatedFirstString = generateStringFromArrayFillCounts(
        lettersToChoseFrom,
        [],
        stringSize
    );
    generatedSecondString = generateStringFromArrayFillCounts(
        lettersToChoseFrom,
        [],
        stringSize
    );
    generatedThirdString = generateStringFromArrayFillCounts(
        lettersToChoseFrom,
        [],
        stringSize
    );

    console.log(
        "First str: " + generatedFirstString,
        "\nSecond str: " + generatedSecondString,
        "\nThird str: " + generatedThirdString
    );

    makeDomSuccess(
        threeStringsFirstResultsDom,
        `Generated first string: <br>"${generatedFirstString}"`
    );

    makeDomSuccess(
        threeStringsSecondResultsDom,
        `Generated second string: <br>"${generatedSecondString}"`
    );

    makeDomSuccess(
        threeStringsThirdResultsDom,
        `Generated third string: <br>"${generatedThirdString}"`
    );

    stringsArray = getCombinedArrayOfArrays([
        generatedFirstString,
        generatedSecondString,
        generatedThirdString,
    ]);

    console.log("Combination: " + stringsArray);
});

const combinationsResultsDom = document.querySelector(
    "#three-strings-combinations-results"
);
const combinationsButtonDom = document.querySelector(
    "#three-strings-combinations-btn"
);

let uniqueStringsArray = [];
let noneRepetitiveArray = [];

combinationsButtonDom.addEventListener("click", function () {
    uniqueStringsArray = [];
    let totalUniqueStrings = getUniqueArraysCount(
        stringsArray,
        uniqueStringsArray
    );

    console.log(
        "Total unique strings: " + totalUniqueStrings,
        "\nAll unique strings: ",
        uniqueStringsArray
    );
    let output =
        `Total unique string: ${totalUniqueStrings}` +
        `<br>All unique string: <br>"${uniqueStringsArray.join(", ")}"`;

    makeDomSuccess(combinationsResultsDom, output);
});

const noneRepetitiveResultsDom = document.querySelector(
    "#three-strings-none-repetitve-results"
);
const noneRepetitiveButtonDom = document.querySelector(
    "#three-strings-none-repetitve-btn"
);

noneRepetitiveButtonDom.addEventListener("click", function () {
    if (!isArrayAndNotEmpty(stringsArray)) {
        makeDomFailiure(
            noneRepetitiveResultsDom,
            "You need to generate 3 strings first in order to get none repetitive values!"
        );
        return;
    }

    let totalNoneRepetitveValues = getNoneRepetetiveCount(
        stringsArray,
        noneRepetitiveArray
    );

    console.log(
        "Total none repetitive strings: " + totalNoneRepetitveValues,
        "\nAll none repetitive strings: ",
        noneRepetitiveArray
    );
    let output =
        `Total unique string: ${totalNoneRepetitveValues}` +
        `<br>All unique string: <br>"${noneRepetitiveArray.join(", ")}"`;

    makeDomSuccess(noneRepetitiveResultsDom, output);
});
