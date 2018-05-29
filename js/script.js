var pacientes = document.querySelectorAll('.paciente');

console.log(pacientes);

var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector('.info-imc');



tdImc.textContent = imc;

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
}

if(pesoTrue && alturaTrue)
{
    var imc = peso/Math.pow(altura, 2);
    tdImc.textContent = imc;
}

else
{
    tdImc.textContent = "Valores inválidos!";
}

/*
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