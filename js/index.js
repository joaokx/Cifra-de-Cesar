var criptografar = document.getElementById("btn")
criptografar.addEventListener("click", start);

var select = document.querySelector("#select")
select.addEventListener("change" , start)





function start(event) {
    event.preventDefault();
    var incremento = document.querySelector('#incremento')
    var decod = document.querySelector('#botao1')
    var cod = document.querySelector('#botao2')
    var mensagem = document.getElementById('texto').value
    var resposta = document.getElementById('resposta').value
    var passo = document.querySelector('#passo')

    if (select.selectedIndex == 1 ) {
        passo.innerHTML = `<label for="incremento"> Digite o incremento para a Cifra de Cesar:</label>
        <input type="number" id="incremento">`;

        if ( cod.checked == true) {
        } else {
           

        }
    } else if (select.selectedIndex == 2 ){
        if ( cod.checked == true) {

            var retornoB = btoa(mensagem)
            document.getElementById('resposta').value = retornoB

        } 
        if (decod.checked == true) {
            var retornoA = atob(resposta)
            document.getElementById('resposta2').value = retornoA

        }

    }
        
}

function cifraDeCesar() {

    var texto = document.querySelector('#texto').value
    var incremento = document.querySelector('#incremento').value

    if (incremento > 25 && incremento != 26){
        var novoIncremento = incremento % 26;
    } else if (incremento == 26){
        novoIncremento = 1;
    }
    else{
        novoIncremento = incremento;
    }


    var arrLetras = []
    for (var i = 0; i < texto.length ; i++){

        var codigoLetra = texto.charCodeAt(i)
        var somaIncremento = codigoLetra + parseInt(novoIncremento)

        if (codigoLetra >= 97 && codigoLetra <= 122)
        {
            if (somaIncremento >= 122){
                somaIncremento;
            }
            else if (codigoLetra <= 97) {
                codigoLetra = ((codigoLetra = 97 + novoIncremento) % 26) + 97;
            }

            else if ( codigoLetra  <= 65){
                codigoLetra = ((codigoLetra = 65 + novoIncremento))
                
               
            }
            else {
                somaIncremento;
            }
            
        }
        
        arrLetras.push(somaIncremento)
    }

    

}
