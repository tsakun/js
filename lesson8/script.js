let money = +prompt("Ваш бюджет на месяц?","9000");
let time = prompt("Введите дату в формате YYYY-MM-DD","2020-01-28");

let appData = {
    budget: money,
    timeData: time,
    optionalExpenses: {},
    incom: [],
    expenses: {},
    savings: false
}

for (let i=0; i<2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце","");
        b = prompt("Во сколько обойдется?","");

    if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = +b;
    } else {
        i--; 
    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ваш буджет на 1 день = " + appData.moneyPerDay);

if(appData.moneyPerDay <= 100){
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 1000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка!");
}