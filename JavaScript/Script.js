function retangulo(){
    var base=document.querySelector('#bas')
    var altura=document.querySelector('#alt')

    var resposta=base.value*altura.value

    document.querySelector('#res').innerHTML=resposta
}

function triangulo(){
    var base=document.querySelector('#bas')
    var altura=document.querySelector('#alt')

    var resposta=(base.value*altura.value)/2
    document.querySelector('#res').innerHTML=resposta
}