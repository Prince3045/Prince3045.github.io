
function clock(){

let now=new Date()

document.getElementById("clock").innerHTML=
now.toLocaleTimeString()

}

setInterval(clock,1000)



const roles=[
"Java Developer",
"MERN Stack Developer",
"Software Engineer"
]

let i=0
let j=0
let txt=""

function typing(){

if(i<roles.length){

if(j<roles[i].length){

txt+=roles[i][j]
document.getElementById("typing").innerHTML=txt
j++

setTimeout(typing,80)

}else{

txt=""
j=0
i++

setTimeout(typing,900)

}

}

}

typing()



window.addEventListener("scroll",function(){

document.querySelectorAll(".reveal").forEach(el=>{

let top=el.getBoundingClientRect().top

if(top<window.innerHeight-100){

el.classList.add("active")

}

})

})



async function loadProjects(){

const res = await fetch(
"https://api.github.com/users/Prince3045/repos"
)

const repos = await res.json()

const container=document.getElementById("projects-container")

repos.slice(0,6).forEach(repo=>{

const card=document.createElement("div")

card.className="card"

card.innerHTML=`

<h3>${repo.name}</h3>
<p>${repo.description || "No description available"}</p>
<a href="${repo.html_url}" target="_blank">View Repository</a>

`

container.appendChild(card)

})

}

loadProjects()



document
.getElementById("themeToggle")
.onclick=()=>{

document.body.classList.toggle("light")

}
