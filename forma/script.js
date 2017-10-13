
window.onload = function () {
	var inp_email = document.querySelector('input[name=email]');
    var inp_phone = document.querySelector('input[name=phone]');
    var inp_name = document.querySelector('input[name=name]');


	document.querySelector('#send').onclick = function() {
		var params = 'email=' + inp_email.value + '&' + 'phone=' + inp_phone.value + '&' + 'name=' + inp_name.value;  // inp_email - просто поле, поэтому обязательно добавляем value

		ajaxPost(params);

	}
}

function ajaxPost(params) {
	var request = new XMLHttpRequest();  // встроенный в браузеры класс JS

	request.onreadystatechange = function () {   // onreadystatechange - статус готовности, но readyState
		if (request.readyState == 4 && request.status == 200) {   // 0 - new, 1 -open, 2 - send, 3 - частично пришел ответ, 5 - ответ пришел полностью
			if (request.responseText == 1) {
                document.querySelector('#result').innerHTML = 'Отправление прошло успешно';
                document.querySelector('form').style.display = 'none'; // напрямую к форме (тэгу)
			}
			else {
				document.querySelector('#result').innerHTML = request.responseText;

            }  // responseText - текст окторый мы получили в ответе
		}
	}

	request.open ('POST', 'app.php');      // open - метод, для примера методом GET
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // запись чтобы не ломалась кириллица
	request.send(params); // отправляем запрос

}

