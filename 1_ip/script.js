document.querySelector('#shop_ip').onclick = function () {
	ajaxGet ();
}
function ajaxGet() {
	var request = new XMLHttpRequest();  // встроенный в браузеры класс JS

	request.open ('GET', 'ip.php');      // open - метод, для примера методом GET
	request.send (); // отправляем запрос
}
