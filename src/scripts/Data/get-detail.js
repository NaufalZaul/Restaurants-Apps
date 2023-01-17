
export default async function GetDetailRestaurant(detailID) {
  await fetch(`https://restaurant-api.dicoding.dev/${detailID}`)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => console.error(err));
}

GetDetailRestaurant('detail/rqdv5juczeskfw1e867')