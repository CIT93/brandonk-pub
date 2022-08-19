const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}
  
  showOnPage('Do I need to feed the dogs?')

  //Week 2 Learn Together

let oneDog = true
let twoDog = true

//Are both dogs fed? Do not feed dogs.
//Is only one dog fed? Make sure to feed the other dog.
//Else, feed both dogs.

if (oneDog && twoDog) {
    showOnPage('Only feed one dog') 
} else if (oneDog || twoDog) {
    showOnPage('Make sure to feed the other dog') 
} else  {
    showOnPage('Feed both dogs')
}