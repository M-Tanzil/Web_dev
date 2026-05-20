let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button")
let p = document.querySelector("p")
btn.addEventListener("click", async()=>{
   let Cfact = await getFact();
   p.innerText = Cfact;
})

async function getFact() {
    try {
        let res = await axios.get(url)
        return res.data.fact;
    } catch (e) {
        console.log("Error is",e)
    }
}