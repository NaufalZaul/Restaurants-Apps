import createElement from "../Element/element"

function inputToElement(data) {
  const mainList = document.querySelector('.list-restaurant')
  data.map((e) => {
    const createElm = createElement(e);
    mainList.appendChild(createElm)
    return mainList;
  })
}

export default async function Data(list) {
  await fetch(`https://restaurant-api.dicoding.dev/${list}`)
    .then(res => {
      return res.json();
    })
    .then(res => {
      // console.log(res.restaurants);
      return inputToElement(res.restaurants)
    })
    .catch(err => console.error(err))
}

Data('list')

