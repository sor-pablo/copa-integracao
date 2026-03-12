function carregar(){

    return JSON.parse(localStorage.getItem("copa"))

}

function render(){

    let dados = carregar()

    if(!dados) return

    let chaves = document.getElementById("chaves")

    let proximos = document.getElementById("proximos")

    let resultados = document.getElementById("resultados")

    if(chaves) chaves.innerHTML=""
    if(proximos) proximos.innerHTML=""
    if(resultados) resultados.innerHTML=""

    Object.keys(dados).forEach(grupo=>{

        let titulo=document.createElement("h3")

        titulo.innerText=grupo

        chaves.appendChild(titulo)

        dados[grupo].forEach(jogo=>{

            let div=document.createElement("div")

            div.className="jogo"

            div.innerHTML=`
${jogo.time1} ${jogo.placar1 ?? "-"} x ${jogo.placar2 ?? "-"} ${jogo.time2}
`

            chaves.appendChild(div)

            if(jogo.placar1==null){

                let p=document.createElement("div")
                p.innerText=`${jogo.time1} vs ${jogo.time2}`

                proximos.appendChild(p)

            }else{

                let r=document.createElement("div")
                r.className="resultado"
                r.innerText=`${jogo.time1} ${jogo.placar1} x ${jogo.placar2} ${jogo.time2}`

                resultados.appendChild(r)

            }

        })

    })

}

document.addEventListener("DOMContentLoaded",render)