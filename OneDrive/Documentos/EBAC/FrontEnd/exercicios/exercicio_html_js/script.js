function verificar() {
    var campoA = Number(document.getElementById("campoA").value)
    var campoB = Number(document.getElementById("campoB").value)
    var mensagem = document.getElementById("mensagem")

    if (campoB > campoA) {

        alert(`Validado com sucesso! O campo B de valor ${campoB} é maior que o campo A de valor ${campoA}`)
        mensagem.innerHTML = `Entregue com sucesso!`
        mensagem.style.color = "#218f30"


    } else if (campoA > campoB) {

        alert("Erro! O valor do campo B deve ser maior que o campo A!")
        mensagem.innerHTML = `Erro! Tente novamente...`
        mensagem.style.color = "#ec1224"

    } else {

        alert("Valores inválidos! Tente novamente")
        mensagem.innerHTML = `lembre-se de preencher ambos os campos...`
        mensagem.style.color = "#d1c40c"

    }

}