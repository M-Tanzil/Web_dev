let url = "http://universities.hipolabs.com/search?country="

let btn = document.querySelector("#collsrch")
btn.addEventListener("click",async ()=>{
    let inp = document.querySelector("input")
    let country = await inp.value
   let collsepp = await getName(country)
    show(collsepp)
    let head = document.querySelector("#headline")
    head.innerText = ` The list of the colleges in ${country} are`
})
function show (collsepp){
      let ul = document.querySelector("ul")
      ul.innerText = ""
    for(col of collsepp){
        let ul = document.querySelector("ul")
        let li = document.createElement("li")
        li.innerText = col.name
        ul.appendChild(li)
    }
}

async function getName(country) {
    try {
        let res = await axios.get(url+country)
        console.log(res.data)
        return res.data
    } catch (e) {
        console.log("Error is", e)
    }
}