// var input = document.querySelector(input);
//     form = document.querySelector(form);

// form.addEventListener(submit, validateAndSubmit, false);

// function validateAndSubmit(event) {
//   // Prevenindo o comportamento padrão.
//   event.preventDefault();

//   // Pegando o valor do input.
//   var value = input.value;

//   // Fazendo a validação e enviando caso esteja OK.
//   if (value.length <5)
//     alert('O formulário não será enviado, a palavra não possui 5 caracteres.');

//   else {
//     alert('O formulário será enviado.');
//     form.submit(submit);
//   }
// }

function validaNome()
{
    const nome = cadastro.name.value;
    if (nome == "")
    {
      alert('Preencha o campo "Nome"')
    }
}

function validaCPF()
{
    const cpf = cadastro.cpf.value;
    if (cpf == "")
    {
      alert('Preencha o campo "CPF"')
    }
}

function validaRG()
{
    const rg = cadastro.rg.value;
    if (rg == "")
    {
      alert('Preencha o campo "RG"')
    }
}

function validaEndereco()
{
    const endereco = cadastro.street.value;
    if (endereco == "")
    {
      alert('Preencha o campo "Endereco"')
    }
}

function validaNumero()
{
    const numero = cadastro.number.value;
    if (numero == "")
    {
      alert('Preencha o campo "Numero"')
    }
}

function validaBairro()
{
    const bairro = cadastro.neighbourhood.value;
    if (bairro == "")
    {
      alert('Preencha o campo "Bairro"')
    }
}

function validaCidade()
{
    const cidade = cadastro.city.value;
    if (cidade == "")
    {
      alert('Preencha o campo "Cidade"')
    }
}

function validaCelular()
{
    const celular = cadastro.mobile.value;
    if (celular == "")
    {
      alert('Preencha o campo "Celular"')
    }
}

function validaFixo()
{
    const fone = cadastro.phone.value;
    if (fone == "")
    {
      alert('Preencha o campo "Telefone"')
    }
}

function enviarPronto()
{
  alert("Formulario enviado com sucesso!")
}