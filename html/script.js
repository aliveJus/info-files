window.onload = function () {
document.querySelector('#shop_ip').onclick = function () {
	ajaxGet ();
}
}
function ajaxGet() {
	var request = new XMLHttpRequest();  // встроенный в браузеры класс JS

	request.onreadystatechange = function () {   // onreadystatechange - статус готовности, но readyState
		if (request.readyState == 4 && request.status == 200) {   // 0 - new, 1 -open, 2 - send, 3 - частично пришел ответ, 5 - ответ пришел полностью
			document.querySelector('#myip').innerHTML = request.responseText;  // responseText - текст окторый мы получили в ответе
			
		}	
	}

	request.open ('GET', 'ip.php');      // open - метод, для примера методом GET
	request.send (); // отправляем запрос
}

document.querySelector('#hide_ip').onclick = function () {
	clear ();
}
function clear() {
	document.querySelector('#myip').innerHTML = "<p>Скрыто!</p>";
}