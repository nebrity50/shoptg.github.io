const eurInput = document.querySelector('.euro')
const rublInput = document.querySelector('.rubl')
const hrnInput = document.querySelector('.hrivnya')
const usdInput = document.querySelector('.dollar')
const price12 = document.querySelector('.price12')
const price6 = document.querySelector('.price6')
const price3 = document.querySelector('.price3')
const buyInput = document.querySelector('.buy')
const main = document.querySelector('#main')

eurInput.addEventListener('mouseenter', () => {
    price12.textContent = '12€'
    price6.textContent = '7€'
    price3.textContent = '4.5€'
})
rublInput.addEventListener('mouseenter', () => {
    price12.textContent = '1200₽'
    price6.textContent = '700₽'
    price3.textContent = '400₽'
})
hrnInput.addEventListener('mouseenter', () => {
    price12.textContent = '480₴'
    price6.textContent = '280₴'
    price3.textContent = '160₴'
})
usdInput.addEventListener('mouseenter', () => {
    price12.textContent = '13$'
    price6.textContent = '8$'
    price3.textContent = '5$'
})

buyInput.addEventListener('mousedown', () => {
    main.querySelectorAll('*').forEach((n) => n.style.display=none)
})