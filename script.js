async function buscaEndereço(cep){ 
     const mensagemerro = document.getElementById("erro")
      mensagemerro.innerHTML= "";
    try {
      

    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const consultaCEPconvertida = await consultaCEP.json()
    if (consultaCEPconvertida.erro) {
        throw Error('Cep não existente')
    }
    const cidade = document.getElementById('cidade');
    const logradouro = document.getElementById('endereco');
    const estado = document.getElementById('estado');

    cidade.value = consultaCEPconvertida.localidade
    logradouro.value = consultaCEPconvertida.logradouro
    estado.value = consultaCEPconvertida.uf





    console.log(consultaCEPconvertida)
    return consultaCEPconvertida



    } catch(erro){
        mensagemerro.innerHTML = `<p>Cep inválido, tente novamente</p>`
        console.log(erro)
    }
}
   
const cep = document.getElementById("cep")
cep.addEventListener("focusout", () => buscaEndereço(cep.value))
 



/*async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));*/