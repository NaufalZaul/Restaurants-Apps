// import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/home-style.css';
// import './Element/button-details';
import Data from './Data/fetch-data';
import GetDetailRestaurant from './Data/get-detail';
// GetDetailRestaurant













// import Data from "../DATA.json";

// const y = await Data()
// console.log(y);


// const menu = document.querySelector('.menu');

// function TagDiv(cls) {
//     const div = document.createElement('div');
//     div.setAttribute('class', cls);
//     return div;
// }

// function TagP(id, elm) {
//     const p = document.createElement('p');
//     p.setAttribute('id', id);
//     if (id == 'rate') {
//         p.innerHTML = '<i class="fas fa-solid fa-star"></i>' + elm;
//     } else if (id == 'city') {
//         p.innerHTML = '<i class="far fa-regular fa-map"></i>' + elm;
//     } else {
//         p.innerHTML = elm;
//     }
//     return p;
// }


// function dataMenu(name, description, src, city, rate) {

//     const img = document.createElement('img');
//     img.setAttribute('src', src);
//     img.setAttribute('alt', " ");

//     const sub = TagDiv('sub');
//     sub.append(TagP('city', city), TagP('rate', rate));

//     const descriptionMenu = TagDiv('description-menu');
//     descriptionMenu.append(sub, TagP('name-menu', name), TagP('des-menu', description + '...'))

//     const imgMenu = TagDiv('img-menu');
//     imgMenu.appendChild(img);

//     // const dataMenu = TagDiv('data-menu');
//     const dataMenu = document.createElement('a');
//     dataMenu.setAttribute('href', ' ')
//     dataMenu.setAttribute('class', 'data-menu')
//     dataMenu.append(imgMenu, descriptionMenu);


//     menu.appendChild(dataMenu);
//     return menu;
// }


// Data.restaurants.map(e => dataMenu(e.name, e.description.substring(0, 60), e.pictureId, e.city, e.rating));
