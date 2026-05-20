let url = "http://universities.hipolabs.com/search?country=india&state-province="


let btn = document.querySelector("#collsrch")
btn.addEventListener("click",async()=>{
    let inp = document.querySelector("input").value
    let collarr = await statecoll(inp)
    show(collarr)
})
function show(collarr){
    let ul = document.querySelector("ul")
    ul.innerText = ""
    for(col of collarr){
    let li = document.createElement("li")
    li.innerText= col.data
    ul.appendChild(li)
    }
}
async function statecoll(state) {
    try {
        let res = await axios.get(url+state)
        return res.data
        console.log(res)
    } catch (error) {
        console.log("error = ",error)
    }
}