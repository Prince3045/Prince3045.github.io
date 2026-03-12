function updateTime(){

let now = new Date()

let time = now.toLocaleTimeString()

let date = now.toLocaleDateString()

document.getElementById("time").innerHTML =
"Current Time: " + time + " | " + date

}

setInterval(updateTime,1000)
