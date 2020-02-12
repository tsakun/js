let menuItems = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    promp = document.querySelector('#prompt');

menu.insertBefore(menuItems[2], menuItems[1]);
let li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';

menu.appendChild(li);
document.body.style.background = 'url(img/apple_true.jpg)';
title.textContent = 'Мы продаем только подлинную технику Apple';
adv.remove();

let promptQuestin = prompt("Какое Ваше отношение к технике Apple?", "");
promp.textContent = promptQuestin;