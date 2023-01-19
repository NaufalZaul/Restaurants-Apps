/* eslint-disable no-unused-vars */
// import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/home-style.css';
// import btn from './Element/button-details';
// import Data from './Data/fetch-data';
// import GetDetailRestaurant from './Data/get-detail';
// GetDetailRestaurant
// import BTNDetails from './Element/button-details';

// name, description, city, address, pictureId, categories(name), menus(foods(name), drinks(name)), rating, customerRevies

function elementDetails(...val) {
  const getDIV = document.querySelectorAll('.detail')[val[1].idDIV]
  const item = val[0];
  getDIV.innerHTML = `
  <div class="">
    <h1 class="title">${item.name}</h1>
    <h4 class="city">${item.city}</h4>
    <p class="description">${item.description}</p>
    <span class="rate">Rating: ${item.rating}</span>
    <p class="description">${item.address}</p>` +

    item.menus.foods.map(e => {
      // let foodsAndDrinks = `<div class="">
      //   <div class="">
      //     <p class="foods">${e.name}</p>
      //   </div>
      //   <div class="">
      //     <p class="drinks">${e.name}</p>
      //   </div>
      // </div>`

      // let foods =
      //   let drinks = 

    })

  item.customerReviews.forEach(element => {
    let reviewer = `<p class="reviewer">${element.name}</p>`
  })

  item.categories.map(e => {
    let categories = `<p class="categories">${e.name}</p>`
  })

}

function createElement(...val) {
  const elementDIV = document.createElement('div')
  val.map(item => {
    let listItemRestorant = `
      <div class="header-list" id="${item.id}">
        <div class="name-city">
          <h1 class="title">${item.name}</h1>
          <h4 class="city">${item.city}</h4>
          <p class="description">${item.description}</p>
          </div>
          <div class="img-rate">
          <img src="https://restaurant-api.dicoding.dev/images/small/${item.pictureId}" alt="">
          <span class="rate">Rating: ${item.rating}</span>
        </div>
        <button type="button" class="btn-details" >Get Details</button>
      </div>
      <div class="detail"></div>
      `
    elementDIV.setAttribute('class', 'item-box')
    elementDIV.innerHTML = listItemRestorant
  })
  return elementDIV;
}

function inputToElement(data) {
  const mainList = document.querySelector('.list-restaurant')
  data.map((e) => {
    const createElm = createElement(e);
    mainList.appendChild(createElm)
    return mainList;
  })
}

function GetDetailRestaurant() {
  const Buttons = document.querySelectorAll('.btn-details');
  Buttons.forEach((button, key) => {
    button.addEventListener('click', ((id) => {
      // console.log(key);
      let detailID = id.currentTarget.parentElement.id;
      fetch(`https://restaurant-api.dicoding.dev/detail/${detailID}`)
        .then(res => {
          return res.json();
        })
        .then(res => {
          // console.log(res.restaurant);

          // return res;
          return elementDetails(res.restaurant, { idDIV: key });
        })
        .catch(err => console.error(err));
    }))
  })
}


// async function Data(list) {
// await fetch(`https://restaurant-api.dicoding.dev/${list}`)
async function Data() {
  await fetch(`https://restaurant-api.dicoding.dev/list`)
    .then(res => {
      return res.json();
    })
    .then(res => {
      return inputToElement(res.restaurants)
    })
    .catch(err => console.error(err))
}

Data()






setTimeout(() => {
  // btn
  // console.log(BTNDetails());
  GetDetailRestaurant()
}, 2000)




















































































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
