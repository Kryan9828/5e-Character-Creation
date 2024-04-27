//Arrays, Objects, and Variables
const races = []
const charClasses = []

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

//fetch Functions
function storeRaces(data){
    let i =0
    for(i in data.results){
        races.push(data.results[i].index)
    }
    console.log(races)
}

function processRacesResponse(response){
    let responseProcess = response.json()
    responseProcess.then(storeRaces)
}

function getRaces(){
    let fetchRaces = fetch(racesURL)
    fetchRaces.then(processRacesResponse)
}

// getRaces()

//Step-By-Step Functions
function stepZero(){
    document.body.append(welcome)
    mainText.innerText = `This is a Dungeons & Dragons 5e character creation. This page will take you through the step by step process for character creation for a level 1 character. When you are ready to continue click "Next".`
    document.body.append(mainText)
    document.body.append(next)
}
function stepOne(){
    document.body.removeChild(next)
    welcome.innerText = "Step One: Choose Character Race"
    mainText.innerText = "In this step you will choose your character race. To see more details about a specific race please click on it"
    getRaces()
    let i = 0
    for(i in races){
        if(races[i] === "dragonborn"){
            let dragonborn = document.createElement("radio")
            dragonborn.className = "race"
            dragonborn.innerText = races[i]
            document.body.append(dragonborn)
        } else if(races[i] === "dwarf"){
            let dwarf = document.createElement("radio")
            dwarf.className = "race"
            dwarf.innerText  = races[i]
            document.body.append(dwarf) 
        }else if(races[i] === "elf"){
            let elf = document.createElement("radio")
            elf.className = "race"
            elf.innerText = races[i]
            document.body.append(elf)
        }
    }
    document.body.append(previous)
    document.body.append(next)
}

stepZero()

next.addEventListener("click",function(){
    stepOne()
})
