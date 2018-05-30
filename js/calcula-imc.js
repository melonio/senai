
var pacientes = document.querySelectorAll('.paciente');
lerPacientes();
/*
SEM LÓGICA!
*/



function lerPacientes()
{
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
        //s3n@il0b

        if(peso < 0 | peso >= 500)
        {
            pesoTrue = false;
        }

        if(altura < 0 || altura > 3)
        {
            pesoTrue = false;
            tdImc.textContent = "Altura inválida";
            paciente.classList.add('paciente-invalido');
        }

        if(pesoTrue && alturaTrue)
        {
            var imc = calculaImc(peso, altura);
            tdImc.textContent = imc;
        }

        function calculaImc(peso, altura)
        {
            var imc = 0;
            imc = peso / Math.pow(altura, 2);
            return imc.toFixed(2);
        }
    }
}

/*
var titulo = document.querySelector('.titulo');

titulo.addEventListener('click', mostraMensagem);

function mostraMensagem()
{
    console.log("Olá, fui clicado!");
}
*/

/*
function adicionarPaciente()
{
    var tabela = document.getElementById('tabela-pacientes').innerHTML;
    var conteudo = tabela;
    var nomePac = getElementById('nome').value;
    var pesoPac = parseFloat(getElementById('peso').value);
    var alturaPac = parseFloat(getElementById('altura').value);
    var gorduraPac = parseFloat(getElementById('gordura').value);
    var string =
    "<td class='info-nome'>"+nome+"</td>"
    "<td class='info-peso'>"+peso+"</td>"
    "<td class='info-altura'>"+altura+"</td>"
    "<td class='info-gordura'>"+nome+"</td>";

    tabela.innerHTML = conteudo + string;
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
