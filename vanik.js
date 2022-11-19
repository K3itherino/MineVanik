
const Ipcopy = document.getElementById("IP")
const copyCon = document.getElementById("copy")
function back(){
    copyCon.classList.toggle("show")
}

Ipcopy.addEventListener("click", (event)=>{
    const content = "vanik.survival-zone.com"
    navigator.clipboard.writeText(content)
    copyCon.classList.toggle("show")
    setTimeout(back, 1000)
    
})
