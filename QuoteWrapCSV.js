/**
  {
    "api":1,
    "name":"Quote Wrap CSV",
    "description":"Split string into words, wrap in quote marks, and make new comma separated string",
    "author":"Paul",
    "icon":"hurricane",
    "tags":"quote, split, string, csv",
    "bias":0.1
  }
**/

function main(state) {
  try {
    let string = state.text;
    let arrayFromString = string.replace(/\s+/,"").split(",");
    let newString = arrayFromString.join("', '");
    let fixedString = "'" + newString + "'";
    state.text = fixedString;
  }
  catch(error) {
    state.postError("Something messed up happened when trying to wrap the words!")
  }
}