
let resultArray = []

let maxRes = localStorage.getItem("stor_maxResult")
let yExs = localStorage.getItem("stor_count_exs")
document.getElementById("xFromYMessage").innerHTML = `Итак, вот ${yExs} примеров, результат не более ${maxRes}`

let rows = Number(localStorage.getItem("stor_count_exs"))

create_table("Примеры", rows, 5)

let buttonSubmit = document.createElement('button')
    buttonSubmit.id = 'buttonSub'
    buttonSubmit.innerHTML = "OK"
    document.body.append(buttonSubmit)

buttonSubmit.onclick = checkAnswers




function create_table(name, Qrows, Qcolumns) {
    let quantityRows = Qrows
    let quantityColumns = Qcolumns
    let tableName = name
    
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')

    let inputAnswer = document.createElement('input')
    inputAnswer.classList.add('inputAns')

    table.appendChild(thead)
    table.appendChild(tbody)

    document.getElementById("table_exs").appendChild(table)

    for (let i=0; i<quantityRows; i++) {

        let arrayXY = getEx()
        let x1 = arrayXY[0]
        let sign = arrayXY[1]
        let x2 = arrayXY[2]
        let result = arrayXY[3]

        localStorage.setItem(`RightAnswersNo_${i}`, result)
        //alert(`Запись в хранилище ${i}-ого ответа: ${result}`)

        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = x1;
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = sign;
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = x2;
        let heading_4 = document.createElement('th');
        heading_4.innerHTML = "=";
        let heading_5 = document.createElement('th');
        heading_5.insertAdjacentHTML("beforeEnd",`<input id="answerNo${i}" class="inputAns" maxlength="2">`);

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        row_1.appendChild(heading_4);
        row_1.appendChild(heading_5);
        thead.appendChild(row_1);   
    }
}

function getEx() { // Функция формирует пример из расчета того, что результат 20 >= x >= 0

    for (let i=0,j=0;i<1;i++) {
        let x1 = Math.round(Math.random() * maxRes) // Первое число
        let x2 = Math.round(Math.random() * maxRes) // Второе число
        let sign = Math.round(Math.random() * 10) < 5 ? "+" : "-" // Знак операции

        let result 
        if (sign == "+")
            result = Number(x1) + Number(x2)
        else
            result = Number(x1) - Number(x2)

        if (result >= 0 && result <= maxRes) { // Проверка результата
            resultArray[i] = result
            j++
            return [x1.toString(), sign, x2.toString(), result]
        }
         else {
            i--
        }
    }
}

function checkAnswers () {
    
    let countRows = localStorage.getItem('stor_count_exs')
    
    let wrongAnswers = 0
    // alert(`в хранилище лежат правильные ответы:\n
    // ${localStorage.getItem('RightAnswersNo_0')},
    // ${localStorage.getItem('RightAnswersNo_1')},
    // ${localStorage.getItem('RightAnswersNo_2')}`)

    for (let i=0; i<countRows; i++) {
        
        let userAnswer = Number(document.getElementById(`answerNo${i}`).value)
        let rightAnswer = Number(localStorage.getItem(`RightAnswersNo_${i}`))
       // alert(`${i} правильный ответ - ${rightAnswer} \n ${i} ответ юзера - ${userAnswer}`)

         if (userAnswer != rightAnswer) {
             wrongAnswers++
         }
    }
    alert(`Количество неверных ответов: ${wrongAnswers}`)
    localStorage.clear()
    buttonSubmit.onclick = ''

    if (wrongAnswers == 0 ) {
        addLinkYoutube()
    }
}

function addLinkYoutube () {
    let divLink = document.createElement("div")

    let a = document.createElement('a');
    let linkText = document.createTextNode("СМОТРЕТЬ МУЛЬТИКИ");
    a.appendChild(linkText);
    a.title = "my title text";
    a.href = "https://www.youtube.com/";
    divLink.appendChild(a);

    document.body.appendChild(divLink)

}
