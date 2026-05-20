let inp = document.querySelector("input")
let btn = document.querySelector("#sub")
let ul = document.querySelector("ul")

btn.addEventListener("click",function(){
    let itms = document.createElement("li")
    itms.innerText= inp.value 

    let delb = document.createElement("button")
    delb.classList.add("del")
    delb.innerText = "Delete"
    itms.append(delb)
    ul.appendChild(itms)
    inp.value = ""
let Dbtns = document.querySelectorAll(".del")
    for(Dbtn of Dbtns){
        Dbtn.addEventListener("click",function(){
            let rmv = this.parentElement;
            rmv.remove()
        })
    }
        
    

})