export default function createElement(...val) {
  const elementDIV = document.createElement('div')
  // const elementBUTTON = document.createElement('button')
  val.map(item => {
    // <div >
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
        <button type="button" class="btn-details">Get Details</button>
      </div>
      `
    // elementDIV.setAttribute('id', item.id)
    // elementBUTTON.setAttribute('onclick', 'yyy')
    // elementBUTTON.innerHTML = listItemRestorant


    elementDIV.setAttribute('class', 'item-box')
    elementDIV.innerHTML = listItemRestorant
  })
  return elementDIV;
}

