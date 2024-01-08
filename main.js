const form = document.getElementById('contando-historia');

function validaNome(nomeCompleto) {
    const nomeCompletoArray = nomeCompleto.split(" ");
    return nomeCompletoArray.length >=2;
}

form.addEventListener('submit', function(e){
    let formValido = true;
    e.preventDefault()

    const nomeCompleto = document.getElementById('nome completo');
    const email = document.getElementById('e-mail');
    const telefone = document.getElementById('telefone');
    const mensagemSucesso = `conto enviado`;

    formValido = validaNome
    if(!formValido) {
        alert("Preencha todos os vampos");
    } else {
        alert(mensagemSucesso);

        nomeCompleto.value = ' ';
        email.value = ' ';
        telefone.value = ' ';
    }
})

console.log(form);