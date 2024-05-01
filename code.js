//Arrays, Objects, and Variables
const races = []
const charClasses = []



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
    document.body.append(radioDragonborn)
    document.body.append(radioDragonbornLabel)  
    document.lastChild.append(previous)
    document.lastChild.append(next)
}

stepZero()

next.addEventListener("click",function(){
    stepOne()
},{once:true})

radioDragonborn.addEventListener("click",function(){
    fetch(racesURL+"/dragonborn")
    .then(response => response.json())
    .then(data => {
    console.log(data)})
})
