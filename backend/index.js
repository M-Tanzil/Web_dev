const express = require("express")
const app = express()
const port = 3000
const path = require("path")

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.listen(port, ()=>{
    console.log(`app listen on port ${port}`)
});

app.post("/",(req ,res)=>{
    res.send("you are in home")
    console.log("you are in home")
})

app.get("/contact",(req ,res)=>{
    res.send("you are in contact")
    console.log("you are in contact")
})
app.get("/help",(req ,res)=>{
    res.send("you are in help")
    console.log("you are in help")
})


// app.get("/*splat",(req,res)=>{
//     res.send("no page exist")
// })
// app.use((req,res)=>{
//     console.log("request recived")
//     res.send("<h1>Server is ON</h1>")
// });

app.set("view engine","ejs")
app.set("views", path.join(__dirname,"views"))

app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/search",(req,res)=>{
    // console.log(req.query)
    let {q} = req.query
    res.send(`the querry string is : ${q} `)
})
app.get("/randnum",(req,res)=>{
    let num = Math.floor(1000000000+Math.random()*9000000000)
    res.render("randnum.ejs",{num})
})
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params
    const data = require("./ig.json")
    const user = data[username]
    console.log(user)
    res.render("ig.ejs",{user})
})

app.get("/register",(req,res)=>{
    let {user , password} = req.query
    res.send(`Hello ${user} welcome back`)
})

app.post("/register",(req,res)=>{
    let {user , password} = req.body
    console.log(req.body)
    res.send(`we get POST request, hello ${user}`)
})
