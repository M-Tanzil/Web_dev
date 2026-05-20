
let d = document.querySelector("div")
let u = document.querySelector("ul")
let lis = document.querySelectorAll("li")

d.addEventListener("click", function (e) {
    e.stopPropagation()
    alert("div clicked")
})
u.addEventListener("click", function (e) {
    e.stopPropagation()
    alert("ul clicked")
})
for (li of lis) {
    li.addEventListener("click", function (e) {
        e.stopPropagation()
        alert("li clicked")
    })
}