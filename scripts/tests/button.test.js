
/**
 * @jest-environment jsdom
 */

// import the function that we are testing, from calc.js file
const buttonClick = require("../button");

// jest directive beforeEach
// this is the part of the html that we want to test
beforeEach(() => {
    document.body.innerHTML = '<p id="par"></p>';
});

describe("DOM tests", () => {
    test("expect p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
});