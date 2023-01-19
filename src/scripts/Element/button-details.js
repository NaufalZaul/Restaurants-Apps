// const Buttons = document.querySelectorAll('.btn-details');
// console.log(Buttons)
function getData() {
  // button.addEventListener('click', (cl) => {
  // console.log(cl.currentTarget.parentElement.id)
  // a = cl.currentTarget.parentElement.id;
  // return a
  // })
  console.log('hai;');

}
export default function BTNDetails() {
  const Buttons = document.querySelectorAll('.btn-details');
  Buttons.forEach(button => {
    button.setAttribute('onclick', `${getData()}`)
  })
}