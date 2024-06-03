function verificar() {
    var campoA = Number(document.getElementById("campoA").value)
    var campoB = Number(document.getElementById("campoB").value)

    if (campoB > campoA) {

        alert(`Validado com sucesso! O campo B de valor ${campoB} é maior que o campo A de valor ${campoA}`)


    } else if (campoA > campoB) {

        alert("Erro! O valor do campo B deve ser maior que o campo A!")

    } else {

        alert("Valores inválidos! Tente novamente (apenas números!)")

    }

}