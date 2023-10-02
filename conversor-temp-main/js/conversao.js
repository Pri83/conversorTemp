//Função criada para realizar o cálculo da conversão das temperaturas escolhidas pelo usuário
function calcularTemp(event) {
    const tempInic = document.getElementById('temperaturaInicial').value
    const tempFinal = document.getElementById('temperaturaFinal').value
    const valor = parseFloat(document.getElementById('valor').value)
    console.log(tempInic, tempFinal, valor)


// Alertas caso usuário não atenda as condições de informar valor ou manter a mesma temperatura para calcúlo
    if (isNaN(valor)) {
        document.getElementById('resultado').innerHTML = alert('🚨Por favor, insira um valor numérico válido!');
        return; 
    }

    if (tempInic === tempFinal) {
        alert('❌As unidades de temperatura selecionadas são as mesmas. Não é necessário fazer a conversão.');
        return; 
    }

//Cálculo desenvolvido para que o usuário consiga inserir o valor de graus que deveja ser convertido em Celsius, Farehrenheit e Kelvin.
    if (tempInic === 'Celsius' && tempFinal === "Fahrenheit") {
        temperatura = (valor * 9 / 5) + 32
        
    }
    if (tempInic === 'Celsius' && tempFinal === 'Kelvin') {
        temperatura = valor + 273.15
        
    }
    if (tempInic === 'Fahrenheit' && tempFinal === 'Celsius') {
        temperatura = (valor - 32) * 5 / 9
        
    }
    if (tempInic === 'Fahrenheit' && tempFinal === 'Kelvin') {
        temperatura = (valor - 32) * 5 / 9 + 273.15
        
    }
    if (tempInic === 'Kelvin' && tempFinal === 'Celsius') {
        temperatura = valor - 273.15
        
    }
    if (tempInic === 'Kelvin' && tempFinal === 'Fahrenheit') {
        temperatura = (valor - 273.15) * 9 / 5 + 32
        
    }

    


//Função para aparecer a mensagem do valor convertido na tela para o usuário
    document.getElementById('resultado').innerHTML =
        ` A temperatura inicial é de: ${tempInic} e o resultado é ${temperatura}`;
}
