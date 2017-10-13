"use strict"; //   некое заявление внутри скрипта, просто строка. Обычно при использовании стандарта ES6 в начале докуменгта пишут эту строку
window.onload = function(e) {  // onload - полная загрузка страницы

	document.querySelector('p').onclick = function () {
		document.querySelector('p').innerHTML = 'Работает';
	}
}
// Правило №1. Область видимости переменной ограниченно только областью видимости функции и ничто ее не может ограничить. В другия языках не так.

window.onload = function(e) {  // onload - полная загрузка страницы

	for (var i = 0; i < 5; i++) {
		
	}
	console.log(i);

// Для решения это рпоблемы в es6 введены let и const. Область видимость let - в фигурных скобках. Но если обьявить переменную let в корне функции, то она будет видна везде через замыкания.

	for (let b = 0; b < 5; b++) {
		
	}
	console.log(typeof b);
}

//  Но если обьявить переменную let в корне функции, то она будет видна везде через замыкания.
    window.onload = function(e) {
    let c = 99;
    for (let b = 0; b < 5; b++) {
		
	//	console.log(c);
	}
	}
// Const - когда мы что-то положили в нее, то другое уже класть нельзя
//    const test = 50;
//    test = 1; // выдаст ошибку, т.к. константы нельзя менять
//	const test = 50; // тоже выдаст ошибку rediclaration	
//	test++; //тоже ошибка		

//
const settings = {    
	a: 10,
	b: 20,
	c: 30
} 
//settings = {a: 5}; // тоже ошибка
settings.a = 5; // ОШИБКИ НЕТ!
// добавим еще поле в обьект
settings.b = 23; // работает
console.log(settings.a, settings);

//
timer(5);
timer();
timer(0);
//старая запись, где если передать 0 будет выведено ошибочное 60
/*function timer(t) {
	let time = t || 60;
	console.log(time);
}*/
// новая запись es6

function timer(time=60) {
	
	console.log(time);
}




//  спред оператор -  ... 
let str = some('Имя ученика', 'Фамилия' , 5, 4, 4, 2);
document.querySelector('.res').innerHTML = str;
//some('Имя ученика', 'Фамилия' , [5, 4, 4, 2]);  // Равноценная запись, если не ставить ... в функции
function some(name, lastname, ...marks) { // Имя первого параметра (Имя ученика) идет name), в маркс идет все что после до окнца - тут получится массив
	console.log (name);
	console.log(lastname);
	console.log(marks);

	for (let m in marks) {
	//	console.log(m); // вывод ключей массива
		console.log(marks[m]); //  массива

	//	console.log(arguments); // вывод всего что есть в some ()

	}

	// НОВЫЙ ЦИКЛ "for of" в ES6 который равен foreach в PHP
	for (let m of marks) {
	console.log(m);
    }

// ХТМЛ структура в ES5. ТАК БЫЛО РАНЬШЕ
let sum = 0;

for (let m of marks) {
	sum += m;
}
let avr = (sum / (marks.length)).toFixed(2);

// toFixed - 2 знака после запятой
//let res = '<div>' + name + ' ' + lastname + ' <strong>' + avr + '</strong></div>';

	



// в ES6 ВВЕЛИ ОБРАТНЫЙ АПОСТРОФ. Строку можно разрывать переносом!!

let res = `<div>${name} ${lastname}<strong> ${avr}</strong></div>`;
return res;
}
// СТРЕЛОЧНЫЕ ФУНКЦИИ. Используются когда нужно обратиться к родлителю. В асинхронных запросах, анимации, сетинтервалах, таймерах.

let hz = (x) => x+1;
//почти тоже самое
/*let hz = function (x) {
	return x+1;
}*/
          //примеры
// деление с проверкой, что y не равен Нулю          
let nz = (x,y) => {
	if ( y === 0) {
		retutn (null);
	}
	return x / y;
}

// старая запись

// функция создает объект. СТАРАЯ ЗАПИСЬ.
/*
function MyTimer(t) {
	this.time = t;
	this.tick = function() {
		this.time--;
		console.log(this.time);
	}
	this.run = function() {
		setInterval(() => {
			this.tick();
		}, 1000);
	}
}*/

//НОВАЯ ЗАПИСЬ с КЛАССОМ в ES6
	class MyTimer {

		constructor(t) { // обязательное поле
			this.alibaba = t;

		}
		ttick() {
			this.alibaba--;
			
			
		}
		trun () {
			setInterval(() => {
				this.ttick();
			},1000);
		}

	}



window.onload = function(e) {
let items = document.querySelectorAll('.items .item');
for (let item of items) {
	item.onclick = function (e)  {  //item.onclick = (e) => { НЕ СРАБОТАЕТ? т.к. потеряет контекст
		this.classList.toggle('item-active');
	}
}
};
class ConsoleTimer extends MyTimer {  // наследуем свойства
	ttick () {    //переопределяем метод родителя tick
		super.ttick(); // вызов родительского метода, чтобы не писать тоже самое, если одинаковые значения
		console.log(this.alibaba);
	}
}
let t1 = new ConsoleTimer(15);
t1.trun();