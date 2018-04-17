  var searchResults = [
      {
          header: {
              title: "Властелин колец: Возвращение Короля",
              url: "film_page1.html"
          },
          details: {
              poster: "https://pp.userapi.com/c841637/v841637153/742c5/qFaHQ7455RU.jpg",
              actors: "Элайджа Вуд, Вигго Мортенсен, Шон Эстин, Иэн МакКеллен, Орландо Блум, Доминик Монахэн, Билли Бойд, Энди Серкис, Миранда Отто, Бернард Хилл",
              description: "Последняя часть трилогии о Кольце Всевластия и о героях, взявших на себя бремя спасения Средиземья..."
          },
          footer: {
              year: "Год: 2003",
              imdb: "8.90 (1 349 172)",
              budget: "$94 000 000",
              country: "США"
          }
      },

      {
          header: {
              title: "Властелин колец: Две крепости",
              url: "film_page2.html"
          },
          details: {
              poster: "https://pp.userapi.com/c841637/v841637153/742d3/VWNIwRAPn1E.jpg",
              actors: "Элайджа Вуд, Шон Эстин, Орландо Блум, Вигго Мортенсен, Иэн МакКеллен, Доминик Монахэн, Миранда Отто, Джон Рис-Дэвис, Энди Серкис, Билли Бойд",
              description: "Братство распалось, но Кольцо Всевластья должно быть уничтожено..."
          },
          footer: {
              year: "Год: 2002",
              imdb: "8.70 (1 221 214)",
              budget: "$94 000 0000",
              country: "США"
          }
      },

      {
          header: {
              title: "Властелин колец: Братство кольца",
              url: "film_page3.html"
          },
          details: {
              poster: "https://pp.userapi.com/c841637/v841637153/742cc/QFsmuXwie1Y.jpg",
              actors: "Элайджа Вуд, Вигго Мортенсен, Шон Эстин, Иэн МакКеллен, Орландо Блум, Доминик Монахэн, Билли Бойд, Энди Серкис, Миранда Отто, Бернард Хилл",
              description: "Сказания о Средиземье — это хроника Великой войны за Кольцо, войны, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал власть над всеми живыми тварями, но был обязан служить злу."
          },
          footer: {
              year: "Год: 2001",
              imdb: "8.80 (1 389 831)",
              budget: "$93 000 000",
              country: "США"
          }
     }
  ];

  var main = document.createElement('main');

  for (var i = 0; i < searchResults.length; i++) {
      main.appendChild(createArticle(searchResults[i]));
  }

  function createArticle(film) {
    var article = document.createElement('article');

    article.appendChild(createHeader(film.header[i]));
    article.appendChild(createDetails(film.details[i]));
    article.appendChild(createFooter(film.footer[i]));

    return article;

  }

  function createHeader(film) {
      var header = document.createElement('header');

      header.appendChild(createTitle(film.header[i].title));
      header.appendChild(createUrl(film.header[i].url));

      return header;
  }

  function createDetails(film) {
      var details = document.createElement('section');

      details.appendChild(createPoster(film.details[i].poster));
      details.appendChild(createActors(film.details[i].actors));
      details.appendChild(createDescription(film.details[i].description));

      return details;
  }

  function createFooter(film) {
      var footer = document.createElement('footer');

      footer.appendChild(createYear(film.footer[i].year));
      footer.appendChild(createImdb(film.footer[i].imdb));
      footer.appendChild(createBudget(film.footer[i].budget));
      footer.appendChild(createCountry(film.footer[i].country));

      return footer;
  }


  function createTitle(str) {
      var title = document.createElement('h1');
      title.textContent = str;

      return title;
  }

  function createUrl(str) {
      var url = document.createElement('a');
      url.textContent = str;
      return url;
  }

  function createPoster(str) {
      var poster = document.createElement('img');
      poster.textContent = str;
      return poster;
  }

  function createActors(str) {
      var actors = document.createElement('p');
      actors.textContent = str;
      return actors;
  }

  function createDescription(str) {
      var descr = document.createElement('div');
      descr.textContent = str;
      return descr;
  }

  function createYear(str) {
      var year = document.createElement('time');
      year.textContent = str;
      return year;
  }

  function createImdb(str) {
      var imdb = document.createElement('p');
      imdb.textContent = str;
      return imdb;
  }

  function createBudget(str) {
      var budg = document.createElement('p');
      budg.textContent = str;
      return budg;
  }

  function createCountry(str) {
      var country = document.createElement('p');
      country.textContent = str;
      return country;
  }
