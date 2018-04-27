

  'use strict';

  window.onload = function () {
    var main = document.querySelector('main');
    // var main = document.getElementsByTagName('main')[0];

    var request = new XMLHttpRequest();
    request.open('GET', 'database.json', true);
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        if(request.status == 200) {
          var response = JSON.parse(request.responseText);
          var searchResults = response.searchResults;

          for (var i = 0; i < searchResults.length; i++) {
            main.appendChild(createArticle(searchResults[i]));
          }
          // main.appendChild(createArticle(searchResults[0]));
          // main.appendChild(createArticle(searchResults[1]));
          // main.appendChild(createArticle(searchResults[2]));

        } else {
          console.error(request.status, 'Error loading JSON');
        }
      }
    };
    request.send(null);

  // for (var i = 0; i < searchResults.length; i++) {
  //     main.appendChild(createArticle(searchResults[i]));
  // }


  function createArticle(film) {
    var article = document.createElement('article');

    article.appendChild(createHeader(film.header));
    article.appendChild(createDetails(film.details));
    article.appendChild(createFooter(film.footer));

    return article;
  }


  function createHeader(header) {
      var head = document.createElement('header'); //Создаем <header>

      var link = document.createElement('a'); //Создаем <a>
      link.setAttribute('href', header.url); //Присваиваем <a> дочерний элемент в виде атрибута "href". И обращаемся к Header > url

      var titleDivide = header.title.split(':'); // Методом split делим строку на масивы из двух частей ([0] и [1]).
      var mark = document.createElement('mark'); //Создаем <mark>

      mark.appendChild(document.createTextNode(titleDivide[0])); // Добавляем текст (в первую часть масива [0]) в <mark>
      link.appendChild(mark); // Делаем <mark> дочерним к ссылке <a>
      link.appendChild(document.createTextNode(':' + titleDivide[1])); // Добавляем текст (во вторую часть масива [1])

      head.appendChild(document.createElement('h1')).appendChild(link); // В <header> создаем дочерний элемент <h1> в котором ещё один дочерний <a>

      return head;

  }

  function createDetails(details) {

      var section = document.createElement('div'); // Создаем <div>
      section.setAttribute('class', 'movie-description'); // Сетаем atr. element.setAttribute(имя атрибута, значение атрибута);

      var pic = document.createElement('figure'); // Создаем <figure>
      pic.innerHTML =  //Вызываю встроеный метод для переменной pic.
        '<img src="' +  // Куски разметки которую вставляем черещ метод innerHTML
        details.pic + // Обращаемся к родительскому det = <div> что бы обратиться к pic = <figure>.
        '" />' +
        '<figcaption>Обложка фильма</figcaption>';

        var actors = document.createElement('section');
        actors.innerHTML = '<h1>Актеры</h1><p>' + details.actors + '</p>';

      var paragraph = document.createElement('div');
      var description = document.createElement('section');
      description.innerHTML = '<h1>Описание</h1><p>' + details.description + '<p>';

      paragraph.appendChild(description);
      paragraph.appendChild(actors);

      section.appendChild(pic);
      section.appendChild(paragraph);

      return section;
    }

    function createFooter(footer) {
      var section = document.createElement('footer');

      var paragraph = document.createElement('p');

      var year = document.createElement('strong');
      year.textContent = 'Год:';

      var time = document.createElement('time');
      time.appendChild(document.createElement('strong'));

      time.setAttribute('datetime', footer.time);
      time.innerHTML = '<strong>Год:</strong>' + footer.time.split('-')[0];

      var estimate = document.createElement('strong');
      estimate.textContent = ' Оценка ';

      var abbr = document.createElement('span');
      var tooltip = document.createElement('span');
      tooltip.setAttribute('data-tooltip', 'Internet Movie Database');
      tooltip.setAttribute('class', 'tooltip');
      tooltip.textContent = "IMDb";
      abbr.appendChild(tooltip);
      estimate.appendChild(abbr);
      estimate.appendChild(document.createTextNode(':'));

      var additional = document.createElement('small');
      additional.textContent = ' (' + footer.imdb.add + ') ';

      var additional = document.createElement('span');
      additional.textContent = ' (' + footer.imdb + ') ';

      var budget = document.createElement('strong');
      budget.textContent = ' Бюджет:';

      var country = document.createElement('strong');
      country.textContent = ' Страна:';

      section.appendChild(time);
      section.appendChild(document.createTextNode(','));
      section.appendChild(estimate);
      section.appendChild(document.createTextNode(' ' + footer.imdb));
      section.appendChild(additional);
      section.appendChild(document.createTextNode(','));
      section.appendChild(budget);
      section.appendChild(document.createTextNode(' ' + footer.budget + ','));
      section.appendChild(country);
      section.appendChild(document.createTextNode(' ' + footer.country));
      return section;
    } };
