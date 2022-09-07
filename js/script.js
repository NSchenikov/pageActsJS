/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let adv = document.querySelectorAll(".promo__adv"),
    bg = document.querySelector('.promo__bg'),
    genre = bg.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => { //removing adv
    item.remove();
});

genre.textContent = 'драма'; //pushing instead of comedy

bg.style.backgroundImage = 'url("img/bg.jpg")'; // changing background

 
movieList.textContent = ''; // clearing unsorted films on page

movieDB.movies.sort(); // sorting db

movieDB.movies.forEach((film, i) => { //adding sorted movie list
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});



