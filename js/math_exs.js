
let resultArray = []

let xRight = localStorage.getItem("stor_right_count_exs")
let yExs = localStorage.getItem("stor_count_exs")
document.getElementById("xFromYMessage").innerHTML = `Итак, минимум ${xRight} из ${yExs}`

let rows = Number(localStorage.getItem("stor_count_exs"))

create_table("Примеры", rows, 5)


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
        heading_5.insertAdjacentHTML("beforeEnd",'<input class="inputAns" maxlength="2">');

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        row_1.appendChild(heading_4);
        row_1.appendChild(heading_5);
        thead.appendChild(row_1);
    }
}

function getEx() { // Функция формирует пример из расчета того, что результат 20 >= x >= 0
    
    for (i=0;i<1;i++) {
    let x1 = Math.round(Math.random() * 20) // Первое число
    let x2 = Math.round(Math.random() * 20) // Второе число
    let sign = Math.round(Math.random() * 10) < 5 ? "+" : "-" // Знак операции

    let result 
    if (sign == "+")
        result = Number(x1) + Number(x2)
    else
        result = Number(x1) - Number(x2)

        if (result >= 0 && result <= 20) { // Проверка результата
            resultArray[i] = result
        }
         else {
            i--
            continue
         }
    
return [x1.toString(), sign, x2.toString(), result]
    }
}
