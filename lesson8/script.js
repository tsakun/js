
let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?","9000");
    time = prompt("Введите дату в формате YYYY-MM-DD","2020-01-28");
    
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?","9000");
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    optionalExpenses: {},
    incom: [],
    expenses: {},
    savings: true
}

function chooseExpenses() {
    for (let i=0; i<2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце","продукты"),
            b = prompt("Во сколько обойдется?","100");
    
        if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = +b;
        } else {
            i--; 
        }
    }
}
chooseExpenses();

function chooseOptExpenses(){
    for(let i=0; i<3; i++){
        let a = prompt("Статья необязательных расходов?","одежда");
        if ((typeof(a))=== 'string' && (typeof(a)) != null && a != '' && a.length < 50){
            console.log("done");
            appData.optionalExpenses[i+1] = a;
        }else {
            i--;
        }
    
    }
}
// chooseOptExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed();

    alert("Ваш буджет на 1 день = " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel(){
    if(appData.moneyPerDay <= 100){
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 1000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка!");
    }
}
detectLevel();


function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сума депозита?","20000"),
            percent = +prompt("Под какой %?","12");

        appData.monthIncom = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncom);
    }
}
checkSavings();