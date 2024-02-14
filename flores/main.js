async function wait(ms){
  return await new Promise(res => {
    setTimeout(res, ms)
  })
}

window.onload = async() => {
document.body.classList.remove("container");
const texto1 = document.getElementById('texto1');
const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const texto4 = document.getElementById('texto4');
const img = document.getElementById('next-page');
await wait(4000)
texto1.classList.add('subir');
texto2.classList.add('aparecer')
await wait(4000)
texto2.classList.remove('aparecer')
texto2.classList.add('subir')
texto3.classList.add('aparecer')
await wait(4000)
texto3.classList.remove('aparecer')
texto3.classList.add('subir')
texto4.classList.add('aparecer')
await wait(4000)
texto4.classList.remove('aparecer')
texto4.classList.add('subir')
img.classList.add('aparecer')

};