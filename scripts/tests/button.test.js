
/**
 * @jest-environment jsdom
 */

// import the function that we are testing, from calc.js file
const buttonClick = require("../button");

/**jest directive beforeEach
this is the part of the html that we want to test
*/
// beforeEach(() => {
//     document.body.innerHTML = '<p id="par"></p>';
// });

/** the below can be used instead of pasting in html like above
this loads the entire html page to the mock DOM
*/ 
beforeEach(() => {
    // fs is file system handling module built into node
    let fs = require("fs");
    // use fs to open index.html and store contents in this variable
    let fileContents = fs.readFileSync("index.html", "utf-8");
    // open the DOM, attach the file contents, close the DOM
    document.open();
    document.write(fileContents);
    document.close();
})

describe("DOM tests", () => {
    test("expect p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        // gets the h1 tags and stores them in array-like structure - 1 h1 so length of array should be 1
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});