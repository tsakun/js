let start = document.getElementById('start'),
    values = document.querySelectorAll('.budget-value, .daybudget-value, .level-value, .expenses-value, .optionalexpenses-value, .income-value, .monthsavings-value, .yearsavings-value, .year-value, .month-value, .day-value'),
    inputs = document.querySelectorAll('.expenses-item'),
    input1 = document.querySelector('button.expenses-item-btn'),
    input2 = document.querySelector('button.optionalexpenses-btn'),
    input3 = document.querySelector('button.count-budget-btn'),
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income-label'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

