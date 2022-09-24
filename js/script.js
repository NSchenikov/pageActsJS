

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'), //findind class "add" type of form
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]'); //finding single checkbox on the page

    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); //for page not to refresh

        let newFilm = addInput.value;
        const favourite = checkbox.checked;

        if (newFilm) { //if user typed smth to input. This is for not pushing empty string to db

            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if(favourite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm); //push db by film from input
            sortArr(movieDB.movies); //sorting

            createMovieList(movieDB.movies, movieList);
        }

        

        event.target.reset(); //reset element where is action of event listener (input)


    });
    
    const deleteAdv = (arr) => {
        arr.forEach(item => { //removing adv
            item.remove();
        });
    };
    


    const makeChanges = () => {
        genre.textContent = 'драма'; //pushing instead of comedy
    
        bg.style.backgroundImage = 'url("img/bg.jpg")'; // changing background
    };
    

    const sortArr = (arr) => {
        arr.sort();
    };
     

    function createMovieList(films, parent) {
        parent.innerHTML = ''; // clearing unsorted films on page
        sortArr(films);
    
        films.forEach((film, i) => { //adding sorted movie list
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1); //delete one element starting from i

                createMovieList(films, parent); // recursion. When delete element, list will built again
            });
        });
    }

    deleteAdv(adv);
    makeChanges();

    createMovieList(movieDB.movies, movieList);
});

