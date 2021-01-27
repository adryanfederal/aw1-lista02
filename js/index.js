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
var exercice_tree_wight = document.getElementById('exercice-tree-wight');
var exercice_tree_radio_male = document.getElementById('exercice-tree-male');
var exercice_tree_radio_female = document.getElementById('exercice-tree-female');
var exercice_tree_validation = document.getElementById('exercice-tree-validation');
var exercice_tree_response = document.getElementById('exercice-tree-response');
var exercice_tree_button = document.getElementById('exercice-tree-button');

function validation() {
    if (!(exercice_tree_radio_female.checked || exercice_tree_radio_male.checked)) {
        return -1
    }

    if (!(exercice_tree_heigth.value != "" || exercice_tree_wight != "")) {
        return 0
    }

    return 1
}

exercice_tree_button.addEventListener('click', (e) => {
    let result = validation();

    switch (result) {
        case -1:
            exercice_tree_validation.innerText = "Selecione o sexo";
            exercice_tree_validation.className = "span-danger";
            break;
        case 0:
            exercice_tree_validation.innerText = "Insira o seu peso e altura";
            exercice_tree_validation.className = "span-danger";
            break;
        case 1:
            exercice_one_validation.innerText = "";
            break;
    }

    let imc = Number(exercice_tree_wight.value) / (Number(exercice_tree_heigth.value) * Number(exercice_tree_heigth.value))

    if (result != 1) {
        return;
    }

    if (exercice_tree_radio_female.checked) {
        if (imc < 19) {
            exercice_tree_response.innerText = "Abaixo do ideal";

        } else if (imc >= 19 && imc <= 25.8) {
            exercice_tree_response.innerText = "Peso ideal";

        } else if (imc > 25.8) {
            exercice_tree_response.innerText = "Acima do peso ideal";
        }
    } else {
        if (imc < 20.7) {
            exercice_tree_response.innerText = "Abaixo do ideal";

        } else if (imc >= 20.7 && imc <= 26.4) {
            exercice_tree_response.innerText = "Peso ideal";

        } else if (imc > 26.4) {
            exercice_tree_response.innerText = "Acima do peso ideal";
        }
    }

})