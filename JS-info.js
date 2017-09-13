<script>
========================================
свойства
========================================
на примере var text = document.querySelector ('#text'); // querySelector - посиск первого элемента в документе по заданному параметру
text.style.color = 'red'; //меняет цвет у элемента var text с id 'text' на красный
text.style.fontSize = '45px';
text.innerHTML = 'ура!'; //меняет в обьекте  то, что было на "ура!"
text.innerHTML += 'ура!'; //добавит слово "ура!" к текущему тексту
text.className = 'test'; //заменяет класс элемента на 'test'
=========================================
методы
=========================================



=========================================
события
=========================================

</script> 
-------------------------------------------
слайдер на display none | block
-------------------------------------------
<div id="gallery">
  <div class="photos">
    <img src="1.jpg" alt="">
    <img src="2.jpg" alt="">
    <img src="3.jpg" alt="">
    <img src="4.jpg" alt="">
  </div>
  <div class="buttons">
    <input type="button" value="назад" class="prev">
    <input type="button" value="вперед" class="next">
  </div>  
</div>
<script>
	
var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next'); 
var images = document.querySelectorAll('#gallery .photos img'); //получаем массив из картинок. querySelectorAll - возвращает массив
console.log(images);
i = 0;

btn_prev.onclick = function() {
	images[i].style.display = 'none';
	i--;
	if (i < 0) {
		i = images.length - 1;
	}
	images[i].style.display = 'block';
}


btn_next.onclick = function() {
	images[i].style.display = 'none';
	i++;
	if (i >= images.length) {
		i = 0;
	} 
	images[i].style.display = 'block';
	
}
</script>
-------------------------------------------------
слайдер на opacity и position absolute
-------------------------------------------------
btn_prev.onclick = function() {
	images[i].className = '';
	i--;
	if (i < 0) {
		i = images.length - 1;
	}
	images[i].className = 'showed';
}


btn_next.onclick = function() {
	images[i].className = '';
	i++;
	if (i >= images.length) {
		i = 0;
	} 
	images[i].className = 'showed';
	
}
/*// в файле стилей css
#gallery .photos img {
width: 400px;
height: 400px;

margin: 0 auto;
position: absolute;
opacity: 0;
transition: opacity 1s;
}
#gallery .photos img:first-child {
	opacity: 1;

}
.buttons {
  margin: 0 auto;
  text-align: center;
  margin-top: 5px;
}
#gallery .photos img.showed {
	opacity: 1;

}*/
==========================================================

==========================================================