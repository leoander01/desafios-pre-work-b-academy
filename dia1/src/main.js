import './style.css'

const app = document.querySelector('[data-js="app"]')
app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

const link = document.querySelector('[data-js="link"]')

link.addEventListener('click', (e) => {
  e.preventDefault()
  app.classList.toggle('hide')

  // Uma forma de se fazer - Adicionando style inline
  // const display = app.style.display
  // app.style.display = display === 'none' ? 'block' : 'none'
})
