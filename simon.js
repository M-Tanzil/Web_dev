let usersql=[]
let gamesql=[]

let started = false
let level = 0
btns = ["red","blue","green","purple"]
let h3 = document.querySelector("h3")

document.addEventListener("keypress",function(){
    if (started==false){
        console.log("ha")
        started = true
        levelup()
    }
})
function levelup(){
    level++;
    h3.innerText =`level ${level}`
    let randnum = Math.floor(Math.random()*3)
    let rindx = btns[randnum]
    ranBtn = document.querySelector(`.${rindx}`)
    btnflsh(ranBtn)
}
function btnflsh(btn){
    btn.classList.add("white")
    setTimeout(function(){
        btn.classList.remove("white")
    },250)
}
function btnprs(){
    console.log(this)
    let btn = this;
    btnflsh(btn)
}
let Btns = document.querySelectorAll(".butn")
for(btn of Btns){
    btn.addEventListener("click",btnprs)
}