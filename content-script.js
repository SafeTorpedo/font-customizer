document.body.style.fontFamily = "Helvetica, sans-serif";

let tags = [
  "span",
  "p",
  "em",
  "b",
  "i",
  "u",
  "a",
  "li",
  "td",
  "th",
  "input",
  "option",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "div",
];

let fonts = {
  span: "Times New Roman",
  p: "Times New Roman",
  em: "Helvetica",
  b: "Helvetica",
  i: "Helvetica",
  u: "Helvetica",
  a: "Helvetica",
  li: "Helvetica",
  td: "Helvetica",
  th: "Helvetica",
  input: "Helvetica",
  option: "Helvetica",
  h1: "Georgia",
  h2: "Monaco",
  h3: "Droid Sans",
  h4: "Helvetica",
  h5: "Helvetica",
  h6: "Helvetica",
  div: "Helvetica",
  default: "Helvetica",
};
let colors = {
  span: "red",
  p: "white",
  em: "white",
  b: "yellow",
  i: "pink",
  u: "white",
  a: "blue",
  li: "purple",
  td: "white",
  th: "white",
  input: "white",
  option: "white",
  h1: "white",
  h2: "white",
  h3: "white",
  h4: "white",
  h5: "white",
  h6: "white",
  div: "green",
  default: "white",
};

chrome.storage.local.get(["fonts"], function (result) {
  console.log("Value currently is: ");
  console.log(result.fonts);
  fonts = result.fonts;

  for (let i = 0; i < tags.length; i++) {
    let elements = document.getElementsByTagName(tags[i]);
    for (let j = 0; j < elements.length; j++) {
      elements[j].style.fontFamily = fonts[tags[i]];
      console.log(elements[j].style.fontFamily);
    }
  }
});

console.log(fonts);

console.log("content-script.js loaded");
