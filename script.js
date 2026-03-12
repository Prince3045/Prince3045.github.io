
function updateTime(){

let now = new Date()

let time = now.toLocaleTimeString()

document.getElementById("time").innerHTML = time

}

setInterval(updateTime,1000)
