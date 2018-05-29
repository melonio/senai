var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++)
{
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoTrue = true;
    var alturaTrue = true;

    if(peso < 0 | peso >= 500)
    {
        pesoTrue = false;
        console.log("Peso inválido");
    }

    if(altura < 0 || altura > 3)
    {
        pesoTrue = false;
        tdImc.textContent = "Altura inválida";
        paciente.style.background = "lightcoral";
        paciente.style.color = "white";
    }

    if(pesoTrue && alturaTrue)
    {
        var imc = peso/Math.pow(altura, 2);
        Math.round(tdImc.textContent = imc.toFixed(2));
    }

    else
    {
        tdImc.textContent = "Valores inválidos!";
    }
}


/*

console.log(pacientes);

var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector('.info-imc');

var pac = document.querySelector('.paciente')

for(var x = 1; x < 10; x++)
{
    var tdPeso = pac.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    var tdAltura = pac.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = pac.querySelector('.info-imc');

    var imc = peso/Math.pow(altura, 2);

    tdImc.textContent = imc;
}
*/