let money = prompt("Ваш бюджет на месяц?","9000");
let time = prompt("Введите дату в формате YYYY-MM-DD","2020-01-28");

let appData = {
    moneyData: money,
    timeData: time,
    optionalExpenses: "",
    incom: [],
    savings: false
}

let question1 = prompt("Введите обязательную статью расходов в этом месяце","Продукты");
let answer1 = prompt("Во сколько обойдется?","3000");
let question2 = prompt("Введите обязательную статью расходов в этом месяце","Спортзал");
let answer2 = prompt("Во сколько обойдется?","300");

let expenses = {
    answer1:answer2
}

alert("Ваш буджет на 1 день = " + (money - answer1 - answer2)/30);