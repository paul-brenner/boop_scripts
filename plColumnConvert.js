/**
  {
    "api":1,
    "name":"pl Column Convert",
    "description":"convert dot format into col and struct",
    "author":"Paul",
    "icon":"hurricane",
    "tags":"polars column struct",
    "bias":0.1
  }
**/

function main(state) {
  try {
    let inputString = state.text;
    let arrayFromString = inputString.replace(/\s+/,"").split(".");
    for (var i = arrayFromString.length - 1; i >= 0; i--) {
        if (i == 0) {
            arrayFromString[i] = "pl.col(\"" + arrayFromString[i] + "\")"
        } else {
            arrayFromString[i] = ".struct.field(\"" + arrayFromString[i] + "\")"
        }
        
      }
    let newString = arrayFromString.join("");
    state.text = newString;
  }
  catch(error) {
    state.postError("Something messed up happened when trying to wrap the words!")
  }
}