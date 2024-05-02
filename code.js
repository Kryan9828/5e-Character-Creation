//Arrays, Objects, and Variables
const races = []
const racesValues = []
const charClasses = []

//Misc Functions
function capitalize(string){
    let c = string.charAt(0).toUpperCase()
    let d = string.slice(1)
    let finalString = c+d
    return  finalString
}

function getValue(dropDownId){
    let get = document.getElementById(`${dropDownId}`)
    let valueIndex = get.selectedIndex
    let valueOptions = get.options
    let selected = valueOptions[valueIndex].value
    return `${selected}`
}


//fetch Functions
function storeRaces(data){
    let i = 0
    let c = 0
    for(i in data.results){
        racesValues.push(data.results[i].index)
        races.push(capitalize(data.results[i].index))
    }
    console.log(racesValues)
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

getRaces()

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
    let i = 0
    document.body.append(racesDropDown)
    let raceOptionDefault = document.createElement("option")
    raceOptionDefault.value = "default"
    raceOptionDefault.setAttribute("selected","selected")
    raceOptionDefault.setAttribute("disabled","disabled")
    raceOptionDefault.setAttribute("hidden", "hidden")
    raceOptionDefault.text = "Please select Race"
    racesDropDown.appendChild(raceOptionDefault)
    for (i;i<races.length;i++){
        let raceOption = document.createElement("option")
        console.log(races[i])
        raceOption.value = racesValues[i]
        raceOption.text = races[i]
        racesDropDown.appendChild(raceOption)
    
    }   
}

stepZero()

next.addEventListener("click",function(){
    stepOne()
},{once:true})

racesDropDown.addEventListener("change",function(){
    let choice = `/${getValue("races")}`
    fetch(racesURL+choice)
    .then(response => response.json())
    .then(data => {
    console.log(data)})
})
