

                                    BOOTSTRAP
=============================================================================
<div class="clearfix"></div> после блока, потсле которого мы хотим, чтобы следующий блок был с новой строки
-----------------------------------------------------------

Bootstrap:
кнопка закрытия модального окна
  div. modal footer
button type=button class = btn btb default data-dismiss=modal>Close<button

Получение запроса из формы 4ч 14мин (верстка 5,5ч)
form action="send.php(файл, в котором находится php код для формы)"
method="POST"
делаем инпут и скрываем, чтобы узнать что хочет пользователь. Например учавствовать в акции:   input type=hidden name=what value=учавствовать в акции


Анимация заголовков animate.css  link:css  data-wow-delay="0.3s"
выезд заголовков class= wow fadeInLeft и  wow fadInUp


--------------------------------------------------------------------
                                   PHP
--------------------------------------------------------------------
<?
-  $_GET  - формируется из строки URL !!
-  метод $_GET нужен для SEO. Чтобы поисковые роботы могли считать URL, т.к. методом пост    он будет скрыт
-  метод _POST: обязательный атрибут при передачи - поле name которое будет использоваться как ключ в массиве. Например <input name="имя"><input>
- -
-


- $text = file_get_contents ('папка/файл.txt')  получает содержимое файла
- echo nl2br($text) Встроенная функция.Форматирование теста. Обычные переносы заменяет на<br>
- exit - выход из цикла-функции , например exit ('и можно тут чтонить написать'). У меня прекратило работу php. Перед использованием разобраться.
-scandir('директория') . Запись: $files = scandir('папка'). Внимание: $files стал   МАССИВОМ
- is_file проверка является ли файл файлом, а не папкой

?>
---------------
перенос строки
---------------
<? \n ?> работает только в двойных ковычках, т.е. "\n"
'\n' работать не будет


--------------------------------
отрезание пробелов <? trim() ?>
--------------------------------
<?trim(переменная) ?>- убирает все пробелы справа и слева. Оставляет только пробелы между значениями/строками. БЯЗАТЕЛЬНО для применения


----------------------------------------------------------------
            Список, формируемый PHP, массивом и html
-----------------------------------------------------------------
<?
$capitals = [
  'Россия' => ['Москва', 'Санкт-Петербург', 'Новосибирск'],
  'Франция'=> ['Париж', 'Марсель','Лион', 'Ницца'],
  'Англия' => ['Лондон', 'Ливерпуль', 'Бирмингем']
];
?>
<ul>
  <? foreach ($capitals as $country => $towns) : ?>
    <li><?=$country?>
       <ol>
         <? foreach ($towns as $town) : ?>
            <li><?=$town?></li>
            <? endforeach; ?>
       </ol>
   </li>
   <? endforeach; ?>
</ul>



============================================================
                                    FORM
============================================================

--------------------------------------------------------
ЗАПИСЬ ДАННЫХ ФОРМЫ В ФАЙЛ с предварительной проверкой:
--------------------------------------------------------
<?

if (count($_POST) > 0) {
  $name = trim($_POST ['name']); //отрезаем пробелы, ОБЯЗАТЕЛЬНО для применения
  $phone =  trim($_POST ['phone']);
  $dt = date('Y-m-d H:i:s');

  if (mb_strlen($name) < 2) {               //проверка длины слова
    $msg = 'введите правильное имя';
  }
  elseif (mb_strlen($phone) < 6 ) {
    $msg = 'мы не умеем звонить на номера менее 6 цифр';
  }
  elseif (!is_numeric($phone)) {
    $msg = 'в поле телефона только цифры!';
  }
  else {
  file_put_contents('sale.txt', "$dt-|-$name-|-$phone\n", FILE_APPEND); /*Добавить в файл apps.txt параметры name и phone. FILE_APPEND - запись в конец файла не затирая его*/
  $msg = 'ваша заявка принята, ожидайте звонка!';
  }
}
else {                                // тут else говорит, что если это первый заход методом НЕ _POST, т.е. по _GET, тогда это его первый/новый заход и мы ему в соответсвии с этим предлагаем
  $msg = 'Привет! Заполни поля!';
}
?>

-----------------------------------------------------------------------------
ЗАПИСЬ ДАННЫХ ФОРМЫ В БАЗУ ДАННЫХ MYSQL с предварительной проверкой:
-----------------------------------------------------------------------------
<?
if (count($_POST) > 0) {
  $name = trim($_POST ['name']); //отрезаем пробелы, ОБЯЗАТЕЛЬНО для применения
  $phone =  trim($_POST ['phone']);
  $dt = date('Y-m-d H:i:s');

  if (mb_strlen($name) < 2) {               //проверка длины слова
    $msg = 'введите правильное имя';
  }
  elseif (mb_strlen($phone) < 6 ) {
    $msg = 'мы не умеем звонить на номера менее 6 цифр';
  }
  elseif (!is_numeric($phone)) {
    $msg = 'в поле телефона только цифры!';
  }
  else {
    $db = new PDO ('mysql:host=localhost; dbname=test.loc', 'root', '');  // 'host;имя базы', 'логин', 'пароль'
    $db->exec("SET NAMES UTF8"); //exec - это прямое выполнение команды
    $jquery = $db->prepare("INSERT INTO apps (name, phone) VALUES (:name, :phone)"); // вставить в таблицу с именем 'apps (с полями нужными нам. Дату не указываем, потому что она ставится автоматически. Так настроили в базе данных. Видимо это current_time)'
    $values = ['name' => $name, 'phone' => $phone]; //передаем массив, т.к. могут быть несколько значений. Записываем название ключей точно такое же, как дырки в VALUES( :name, : phone)
    $jquery->execute($values);

    $msg = 'ваша заявка принята, ожидайте звонка!';
  }
}
else {                                // тут else говорит, что если это первый заход методом НЕ _POST, т.е. по _GET, тогда это его первый/новый заход и мы ему в соответсвии с этим предлагаем
  $msg = 'Привет! Заполни поля!';
}
?>


Если прописать в <input required> то это после станет обязательным для заполнения. Чит отключение этого возможно через файрбаг (ф12)



==================================================
                 работа с Файлами
==================================================
<?
file_get_contents('какойто файл') // выводит неудобно во всю строку. Не массив!
file('filename') // преобразовывает файл в массив!
?>
=======================================================================================
     чтение текстового файла, преобразование его массив и вывод на экран в виде таблицы
=======================================================================================
<?
$apps = file('sale.txt');  //переводим текст в массив $apps
echo "<table>";
foreach ($apps as $line) {
	$arr = explode('-|-', $line); //разрыв линии по элементу -|- и запись всего этого в массив #arr
	echo "<tr>"; // строка таблицы
	foreach ($arr as $one) {  //теперь перебираем этот массив
		echo "<td>$one</td>"; //ячейки
	}
	echo "</tr>";
}
echo "</table>";

?>
<style>
	table, td {
		border: 1px solid black;
		border-collapse: collapse;
		padding: 5px;
	}
</style>

======================================================================

======================================================================
