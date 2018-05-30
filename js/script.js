
var pacientes = document.querySelectorAll('.paciente');
LerPacientes();
/*
SEM LÓGICA!
*/

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", pegarDados);

function pegarDados()
{
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var gorduraTd = document.createElement('td');

    nomeTd.textContent = nome;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);


    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
    LerPacientes();
}

function LerPacientes()
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
            var imc = peso/Math.pow(altura, 2);
            Math.round(tdImc.textContent = imc.toFixed(2));
        }
    }
}

var titulo = document.querySelector('.titulo');

titulo.addEventListener('click', mostraMensagem);

function mostraMensagem()
{
    console.log("Olá, fui clicado!");
}

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
