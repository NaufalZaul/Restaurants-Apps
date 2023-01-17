import BTNDetails from "./button-details"
// import PictureRestaurant from "../Data/get-picture";
// function createElementDiv(elmDIV) {


// }
// function createElementP(val) {

//   const element = document.createElement('p')
//   element.innerHTML = val;

//   return element;
// }
// function createElementA(val) {
//   const element = document.createElement('a')
//   element.innerHTML = val;
//   return element;
// }

// async function PictureRestaurant(pictId) {
//   await fetch(`https://restaurant-api.dicoding.dev/images/small/${pictId}`)
//     .then(res => {
//       return res.url
//     })
//     .catch(err => console.error(err))
// }

// BTNDetails

export default function createElement(...val) {
  const elementDIV = document.createElement('div')
  val.map(item => {
    // <div id="${item.id}">
    let listItemRestorant = `
      <div class="header-list">
        <div class="name-city">
          <h1 class="title">${item.name}</h1>
          <h4 class="city">${item.city}</h4>
          <p class="description">${item.description}</p>
          </div>
          <div class="img-rate">
          <img src="https://restaurant-api.dicoding.dev/images/small/${item.pictureId}" alt="">
          <span class="rate">Rating: ${item.rating}</span>
        </div>
        <button type="button" class="btn-details" onClick="${BTNDetails}" >Get Details</button>
      </div>
      `
    elementDIV.setAttribute('id', item.id)
    elementDIV.setAttribute('class', 'item-box')
    elementDIV.innerHTML = listItemRestorant
  })
  return elementDIV;
}

