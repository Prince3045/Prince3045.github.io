
function updateTime(){

let now = new Date()

let time = now.toLocaleTimeString()

let date = now.toLocaleDateString()

document.getElementById("time").innerHTML =
"Live Time: " + time + " | " + date

}

setInterval(updateTime,1000)
