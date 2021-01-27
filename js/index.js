/**
 * Váriaveis
 */

var month = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

/**
 * Exercicio 01
 */

var exercice_one_input = document.getElementById('exercice-one-input');
var exercice_one_validation = document.getElementById('exercice-one-validation');
var exercice_one_button = document.getElementById('exercice-one-button');

exercice_one_input.addEventListener('keyup', (e) => {

    if (!e.target.checkValidity()) {
        exercice_one_validation.innerText = e.target.validationMessage;
        exercice_one_validation.className = "span-danger";
    } else {
        exercice_one_validation.innerText = "Número aceito";
        exercice_one_validation.className = "span-success";
    }
})

exercice_one_button.addEventListener('click', () => {

    if (!exercice_one_input.checkValidity()) {
        exercice_one_validation.innerText = exercice_one_input.validationMessage;
        exercice_one_validation.className = "span-danger";
    } else {
        exercice_one_validation.innerText = "Número aceito";
        exercice_one_validation.className = "span-success";
    }
})

/**
 * Exercicio 02
 */

var exercice_two_input = document.getElementById("exercice-two-input");
var exercice_two_validation = document.getElementById("exercice-two-validation");
var exercice_two_response = document.getElementById("exercice-two-response");
var exercice_two_button = document.getElementById('exercice-two-button');

exercice_two_input.addEventListener("keyup", (e) => {

    var value = e.target.value
    var data_splited = value.split("/")

    if (data_splited.length > 2) {

        var date = new Date(`${data_splited[2]}/${data_splited[1]}/${data_splited[0]}`)

        if (isNaN(date.getTime())) {
            exercice_two_validation.innerText = "A data inserida é inválida."
            exercice_two_validation.className = "span-danger";
            return;
        }
        exercice_two_validation.innerText = ""
        exercice_two_response.innerText = `${date.getDay()} de ${month[date.getMonth()]} de ${date.getFullYear()}`;
    }

})

exercice_two_button.addEventListener("click", (e) => {
    var value = exercice_two_input.value
    var data_splited = value.split("/")

    if (data_splited.length > 2) {

        var date = new Date(`${data_splited[2]}/${data_splited[1]}/${data_splited[0]}`)

        if (isNaN(date.getTime())) {
            exercice_two_validation.innerText = "A data inserida é inválida."
            exercice_two_validation.className = "span-danger";
            return;
        }
        exercice_two_validation.innerText = ""
        exercice_two_response.innerText = `${date.getDay()} de ${month[date.getMonth()]} de ${date.getFullYear()}`;
    }
})

/**
 * Exercicio 03
 */

var exercice_tree_heigth = document.getElementById('exercice-tree-heigth');