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
});

const combinationsResultsDom = document.querySelector(
    "#three-strings-combinations-results"
);
const combinationsButtonDom = document.querySelector(
    "#three-strings-combinations-btn"
);

let stringsArray = [];
let uniqueStringsArray = [];

combinationsButtonDom.addEventListener("click", function () {
    stringsArray = getCombinedArrayOfArrays([
        generatedFirstString,
        generatedSecondString,
        generatedThirdString,
    ]);

    console.log("Combination: " + stringsArray);

    uniqueStringsArray = [];
    let totalUniqueStrings = getUniqueArraysCount(
        stringsArray,
        uniqueStringsArray
    );

    console.log(
        "Total unique string: " + totalUniqueStrings,
        "\nAll unique string: ",
        uniqueStringsArray
    );
    let output =
        `Total unique string: ${totalUniqueStrings}` +
        `<br>All unique string: <br>"${uniqueStringsArray.join(", ")}"`;

    makeDomSuccess(combinationsResultsDom, output);
});
