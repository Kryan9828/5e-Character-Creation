//Dom Created Elements
let welcome = document.createElement("h2")
welcome.innerText = "Welcome to 5e Character Creation"
let mainText = document.createElement("p")
mainText.id = "mainText"
let next = document.createElement("button")
next.innerText= "Next"
next.id = "nextButton"
let previous = document.createElement("button")
previous.innerText = "Prev"
previous.id = "previousButton"
let infoText = document.createElement("p")
infoText.id = "infoText"
let radioDragonborn = document.createElement("input")
radioDragonborn.setAttribute("type", "radio")
let radioDragonbornLabel = document.createElement("label")
radioDragonbornLabel.innerText="Dragonborn"
