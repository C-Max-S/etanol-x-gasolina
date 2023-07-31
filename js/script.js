// alert('JS carregado') 
// console.log('teste de console');

//Selecionando um elemento do HTML e guardando ele em uma variável
var btn = document.querySelector('#btn');
var etanol = document.querySelector('#etanol');
var gasolina = document.querySelector('#gasolina');
var msgResult = document.querySelector('.result');
var msgCombustivel = document.querySelector('#msgCombustivel');

//Criando a função de calcularCombustivel
function calcularCombustivel(){
    
    console.log(etanol.value);
    console.log(gasolina.value);

    // != diferente
    // == igual
    // && e
    // || ou

    if (etanol.value && gasolina.value != '') {

        msgResult.style.visibility = 'visible';
        
        // Calculo => etanol / gasolina
        // Se o resultado for menor ou igual a 0.7 abasteça com etanol
        // senão, abasteça com gasolina

        var resultado = etanol.value / gasolina.value;

        if(resultado <= 0.7){
            //alert('abasteça com etanol');
            msgCombustivel.innerHTML = 'Etanol';
        }else{
            //alert('abasteça com gasolina');
            msgCombustivel.innerHTML = 'Gasolina'
        }
        
    }else{
        alert('Preencha os campos');
    }

}

//O navegador vai monitorar o clique no elemento "btn"
//Quando o clique ocorrer, a função "calcularCombustivel" será acionada
btn.addEventListener('click', calcularCombustivel)