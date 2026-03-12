function embaralhar(lista){

    return lista.sort(()=>Math.random()-0.5)

}

function separar(lista, turno){

    return lista.filter(t=>t.turno===turno)

}

function gerarJogos(lista){

    let jogos=[]

    for(let i=0;i<lista.length;i+=2){

        if(lista[i+1]){

            jogos.push({

                time1:lista[i].nome,
                time2:lista[i+1].nome,
                placar1:null,
                placar2:null

            })

        }

    }

    return jogos

}

function gerarCampeonato(){

    let dados = {

        futebolManha: gerarJogos(embaralhar(separar(times.futebol,"manha"))),

        futebolTarde: gerarJogos(embaralhar(separar(times.futebol,"tarde"))),

        voleiManha: gerarJogos(embaralhar(separar(times.volei,"manha"))),

        voleiTarde: gerarJogos(embaralhar(separar(times.volei,"tarde")))

    }

    localStorage.setItem("copa", JSON.stringify(dados))

    render()

}