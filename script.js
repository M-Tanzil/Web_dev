let links = document.querySelectorAll(".card a");
for (let i = 0; i<links.length;i++){
    links[i].style.color= "pink"
}

let btns = document.querySelectorAll("button");
for (btn of btns){
    btn.addEventListener("click",say)
}

function say(){
    alert("whats")
}

