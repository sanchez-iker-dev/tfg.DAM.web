window.addEventListener("load",initEventos)
const $ =  id => document.getElementById(id)

function initEventos(){

    let div_clases = $("clases")
    let div_torneos = $("torneos")
    let div_inicio = $("inicio")

    $("btn_inicio").addEventListener("click",()=>{
        div_inicio.style.visibility="visible"
        div_clases.style.visibility="hidden"
        div_torneos.style.visibility="hidden"
    })
    $("btn_clases").addEventListener("click",()=>{
        div_inicio.style.visibility="hidden"
        div_clases.style.visibility="visible"
        div_torneos.style.visibility="hidden"
    })
    $("btn_torneos").addEventListener("click",()=>{
        div_inicio.style.visibility="hidden"
        div_clases.style.visibility="hidden"
        div_torneos.style.visibility="visible"
    })


}