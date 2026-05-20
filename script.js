let links = document.querySelectorAll(".card a");
for (let i = 0; i < links.length; i++) {
    links[i].style.color = "pink"
}

let btns = document.querySelectorAll("button");
for (btn of btns) {
    btn.addEventListener("click", say)
}

function say() {
    alert("whats")
}

let inp = document.querySelector("#inp")
let par = document.querySelector("#wrt")
inp.addEventListener("input", function () {
    console.log(inp.value)

par.innerText=inp.value
})

let d = document.querySelector("div")
let u=document.querySelector("ul")
let lis=document.querySelectorAll("li")

d.addEventListener("click",function(){
    console.log("div clicked")
})
u.addEventListener("click",function(){
    console.log("ul clicked")
})
for(li of lis){
    lis.addEventListener("click",function(){
    console.log("li clicked")
})
}