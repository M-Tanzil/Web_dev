
// CallBack Hell

// let h1 = document.querySelector("h1")

// function changeColor(color,txt,delay,callback){
//     setTimeout(function(){
//         h1.innerText = txt
//         h1.style.color= color
//         callback()
//     },delay)
// }
// changeColor("red","Welcome","1000",()=>{
//     changeColor("pink","to my","1000",()=>{
//         changeColor("brown","Page","1000")
//     })
// })

// function dataSend(data,sucess,failuer){
//     let speed = Math.floor(Math.random()*9)+1;
//     if(speed > 4){
//         console.log(data)
//         sucess()
//     }
//     else{
//         failuer()
//     }
// }


    function dataSend(data){
    return new Promise((resolve,reject)=>{
            let speed = Math.floor(Math.random()*9)+1;
                 if(speed > 4){
                        resolve("Connection linked with Database")    // Promis for the solution of callback hell
                 }
                   else{
                    reject("Failed to setup connection")
                   }
    })
}
dataSend("hello").then((r)=>{
    console.log("Sucess of data 1")
    console.log(r)
    return dataSend("World")
}).then((r)=>{
    console.log("Sucess of data 2")
    console.log(r)
    return dataSend("Welcome")
}).then((r)=>{
    console.log("Sucess of data 3")
    console.log(r)
})
.catch((e)=>{
    console.log("failuer") 
    console.log(e)
})

// dataSend("hello",()=>{
//     console.log("Sucess of data 1")
//     dataSend("World",()=>{
//         console.log("Sucess of data 2")
//         dataSend("Welcome",()=>{
//             console.log("Sucess of data 3")
//         },()=>{
//           console.log("failuer")  
//         })
//     },()=>{
//     console.log("failuer")    
//     })
// },()=>{
//     console.log("failuer")
// })



// function DataS(data){
//     return new Promise((resolve, reject)=>{

        
//         let Ispeed = Math.floor(Math.random() * 10) +1;
//         if(Ispeed > 4){
//             resolve("Sucess the data send")
//         }
//         else{
//             reject("Failed to send data")
//         }
//     })
//     }


// DataS("hello").then((result)=>{
//     console.log("data 1 send")
//     console.log(result)
//     return DataS("world")
// }).then((result)=>{
//     console.log("data 2 sent")
//     console.log(result)
// })
// .catch((error)=>{
//     console.log("Data fail to send")
//     console.log(error)
// })