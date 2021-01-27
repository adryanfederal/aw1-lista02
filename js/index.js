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

var exercise_one_input = document.getElementById('exercise-one-input');
var exercise_one_validation = document.getElementById('exercise-one-validation');
var exercise_one_button = document.getElementById('exercise-one-button');

exercise_one_input.addEventListener('keyup', (e) => {

    if (!e.target.checkValidity()) {
        exercise_one_validation.innerText = e.target.validationMessage;
        exercise_one_validation.className = "span-danger";
    } else {
        exercise_one_validation.innerText = "Número aceito";
        exercise_one_validation.className = "span-success";
    }
})

exercise_one_button.addEventListener('click', () => {

    if (!exercise_one_input.checkValidity()) {
        exercise_one_validation.innerText = exercise_one_input.validationMessage;
        exercise_one_validation.className = "span-danger";
    } else {
        exercise_one_validation.innerText = "Número aceito";
        exercise_one_validation.className = "span-success";
    }
})

/**
 * Exercicio 02
 */

var exercise_two_input = document.getElementById("exercise-two-input");
var exercise_two_validation = document.getElementById("exercise-two-validation");
var exercise_two_response = document.getElementById("exercise-two-response");
var exercise_two_button = document.getElementById('exercise-two-button');

exercise_two_input.addEventListener("keyup", (e) => {

    var value = e.target.value
    var data_splited = value.split("/")

    if (data_splited.length > 2) {
        console.log(data_splited[0])
        var date = new Date(`${data_splited[2]} ${data_splited[1]} ${data_splited[0]}`)

        if (isNaN(date.getTime())) {
            exercise_two_validation.innerText = "A data inserida é inválida."
            exercise_two_validation.className = "span-danger";
            return;
        }
        exercise_two_validation.innerText = ""
        exercise_two_response.innerText = `${date.getDate()} de ${month[date.getMonth()]} de ${date.getFullYear()}`;
    }

})

exercise_two_button.addEventListener("click", (e) => {
    var value = exercise_two_input.value
    var data_splited = value.split("/")

    if (data_splited.length > 2) {

        var date = new Date(`${data_splited[2]}/${data_splited[1]}/${data_splited[0]}`)

        if (isNaN(date.getTime())) {
            exercise_two_validation.innerText = "A data inserida é inválida."
            exercise_two_validation.className = "span-danger";
            return;
        }
        exercise_two_validation.innerText = ""
        exercise_two_response.innerText = `${date.getDay()} de ${month[date.getMonth()]} de ${date.getFullYear()}`;
    }
})

/**
 * Exercicio 03
 */

var exercise_three_heigth = document.getElementById('exercise-three-heigth');
var exercise_three_wight = document.getElementById('exercise-three-wight');
var exercise_three_radio_male = document.getElementById('exercise-three-male');
var exercise_three_radio_female = document.getElementById('exercise-three-female');
var exercise_three_validation = document.getElementById('exercise-three-validation');
var exercise_three_response = document.getElementById('exercise-three-response');
var exercise_three_button = document.getElementById('exercise-three-button');

function validation() {
    if (!(exercise_three_radio_female.checked || exercise_three_radio_male.checked)) {
        return -1
    }

    if (!(exercise_three_heigth.value != "" || exercise_three_wight != "")) {
        return 0
    }

    return 1
}

exercise_three_button.addEventListener('click', (e) => {
    let result = validation();

    switch (result) {
        case -1:
            exercise_three_validation.innerText = "Selecione o sexo";
            exercise_three_validation.className = "span-danger";
            break;
        case 0:
            exercise_three_validation.innerText = "Insira o seu peso e altura";
            exercise_three_validation.className = "span-danger";
            break;
        case 1:
            exercise_one_validation.innerText = "";
            break;
    }

    let imc = Number(exercise_three_wight.value) / (Number(exercise_three_heigth.value) * Number(exercise_three_heigth.value))

    if (result != 1) {
        return;
    }

    if (exercise_three_radio_female.checked) {
        if (imc < 19) {
            exercise_three_response.innerText = "Abaixo do ideal";

        } else if (imc >= 19 && imc <= 25.8) {
            exercise_three_response.innerText = "Peso ideal";

        } else if (imc > 25.8) {
            exercise_three_response.innerText = "Acima do peso ideal";
        }
    } else {
        if (imc < 20.7) {
            exercise_three_response.innerText = "Abaixo do ideal";

        } else if (imc >= 20.7 && imc <= 26.4) {
            exercise_three_response.innerText = "Peso ideal";

        } else if (imc > 26.4) {
            exercise_three_response.innerText = "Acima do peso ideal";
        }
    }

})

/**
 * Exercicio 04
 */

var exercise_four_input = document.getElementById('exercise-four-input');
var exercise_four_button = document.getElementById('exercise-four-button');
var exercise_four_response = document.getElementById('exercise-four-response');

exercise_four_button.addEventListener('click', () => {
    exercise_four_response.innerText = '';

    exercise_four_response.innerText = exercise_four_input.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

})