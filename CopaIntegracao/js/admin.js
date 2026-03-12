function carregar(){

    return JSON.parse(localStorage.getItem("copa"))

}

function salvar(dados){

    localStorage.setItem("copa",JSON.stringify(dados))

}

function renderAdmin(){

    let dados=carregar()

    let area=document.getElementById("adminJogos")

    area.innerHTML=""

    Object.keys(dados).forEach(grupo=>{

        let h=document.createElement("h2")

        h.innerText=grupo

        area.appendChild(h)

        dados[grupo].forEach((jogo,index)=>{

            let div=document.createElement("div")

            div.innerHTML=`

${jogo.time1}
<input id="p1_${grupo}_${index}" type="number">

x

<input id="p2_${grupo}_${index}" type="number">

${jogo.time2}

<button onclick="salvarPlacar('${grupo}',${index})">
Salvar
</button>

`

            area.appendChild(div)

        })

    })

}

function salvarPlacar(grupo,index){

    let dados=carregar()

    let p1=document.getElementById(`p1_${grupo}_${index}`).value
    let p2=document.getElementById(`p2_${grupo}_${index}`).value

    dados[grupo][index].placar1=parseInt(p1)
    dados[grupo][index].placar2=parseInt(p2)

    salvar(dados)

    alert("Placar salvo")

}

document.addEventListener("DOMContentLoaded",renderAdmin)