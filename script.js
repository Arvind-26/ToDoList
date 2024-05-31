localStorage.clear()

document.getElementById("submit").addEventListener("click", (event) => {
    let heading = document.getElementById("task").value
    let rand = Math.ceil(Math.random() * (999 - 100) + 100)
    let ran = rand * 10
    console.log(rand)
    console.log(heading)
    localStorage.setItem(rand, JSON.stringify(heading))
    document.getElementById("todos").innerHTML = document.getElementById("todos").innerHTML + `<div class="itum" id="${ran}">
    <span id="info">${heading}</span>
    <button class="dele" id="${rand}" onClick="rlick(this.id)">delete</button>
    </div>`
    document.getElementById("task").value = ''
})


function rlick(clicked_id){
    localStorage.removeItem(clicked_id)
    document.getElementById(clicked_id*10).remove()
}