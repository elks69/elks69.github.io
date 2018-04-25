'use strict';
		var btn = document.querySelector('#ajax'); // Присваиваю значение переменной кнопке с id #ajax
		btn.onclick = function () {
 		var req = new XMLHttpRequest();  //Создаем переменную для HTTP запроса
 		req.open('GET', 'js/database.json', true);  // Создаем запрос через req.open указываем мето и имя файла в скобках. Третье значение "true" - асинхронный метод
 		req.onreadystatechange = function (Evt) { // Когда вернулся код состояния 4 выводить текст из консоли, если в диапозоне 200 отображать
	 		if (req.readyState == 4) {
		 		if(req.status == 200) {
			 		console.log(req.responseText);
		 	} else {
			  console.log(req.status, 'Ошибка загрузки');
		 }
	 }
 };
 	req.send(null);
}
