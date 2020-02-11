
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
    savings: true,
    chooseExpenses: function(){
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
    },
    chooseOptExpenses: function(){
        for(let i=0; i<3; i++){
            let a = prompt("Статья необязательных расходов?","одежда");
            if ((typeof(a))=== 'string' && (typeof(a)) != null && a != '' && a.length < 50){
                console.log("done");
                appData.optionalExpenses[i+1] = a;
            }else {
                i--;
            }
        
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed();

        alert("Ваш буджет на 1 день = " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay <= 100){
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay >= 1000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка!");
        }
    },
    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt("Какова сума депозита?","20000"),
                percent = +prompt("Под какой %?","12");
    
            appData.monthIncom = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncom);
        }
    },
    chooseIncome: function(){
        let items = prompt('Что принесло дополнительный доход? (Перечислите через запятую)', "");
        
        while((typeof(items)) != 'string' || items == null || items == ''){
            items = prompt('Что принесло дополнительный доход? (Перечислите через запятую)', "");
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?', ""));
        appData.income.sort();
        
    }
}
//appData.detectDayBudget();
//appData.chooseIncome();

// console.log('Способы доп. заработка: ');
// appData.income.forEach(function(item, i){
//     console.log((i+1) + ' - ' + item);
// });
console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log(key);
}