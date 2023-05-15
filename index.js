
let rootUrl = "https://www.dnd5eapi.co"
// let  clas = 'warlock'


const searchForm = document.getElementById("form")
searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const clas = document.getElementById("classes").value
    const school = document.getElementById("school").value
    const min = document.getElementById("lvlmin").value
    const max = document.getElementById("lvlmax").value
    console.log(clas+school+min+max)

    document.getElementById("results").innerHTML=''

    main(clas, min, max, school)
    
})



async function getSpellList(clas, min,max,school) {
    var spellList = await fetch("https://www.dnd5eapi.co/api/classes/" + clas +"/spells")
        .then(resp => resp.json())
        .then(data => data["results"])
        console.log(spellList)

    return getEachSpell(spellList,min,max,school)

}

function populateCard(data) {
    let cons = ''
    if (data['concentration']) {cons = "Requires Concentration"}
    var d = document.createElement('div')
    d.classList.add('card')
    d.innerHTML = 
        `<h2>${data["name"]}</h2>
        <h4>Level: ${data["level"]} | ${data['school']['name']}<br/>
        ${cons} </h4>
        <span>${data['desc']}</span>`

    document.getElementById("results").appendChild(d)
    console.log(data)
}

async function getEachSpell(data,min,max,school) {
    for(let i = 0; i < data.length; i++) {
        let ext = data[i]['url']

        await fetch(rootUrl + ext)
            .then(resp => resp.json())
            .then(data => {if (filterer(data,min,max,school)) {populateCard(data)}
        }) 
    }
}


function filterer(entry, min, max, school){
        if (entry['level'] < min) {return false}
        if (entry['level'] > max) {return false}

        if (school != 'any') {
            if (entry['school']['index'] != school) {return false}
        }
        return true
}

async function main(clas, min, max, school) {
    let v = await getSpellList(clas, min, max, school)

    let rems = document.getElementsByClassName("card")
    Array.from(rems).forEach(element => {
        element.addEventListener("click", e => {
            let tag = e.target.tagName
            let div = e.target
            if(tag != 'DIV') {
                div = e.target.parentElement
            }
            div.remove()
        })
        
    });
}

// main()

