const input = document.querySelector('[data-js="username"]')

const dontChange = ['da', 'das', 'de', 'do', 'dos']

input.addEventListener('input', (e) => {
  const valuesArray = e.target.value.split(' ')
  console.log('valuesArray:', valuesArray)

  e.target.value = valuesArray.map((word) => {
    return dontChange.includes(word.toLowerCase())
      ? word.toLowerCase()
      : capitalize(word)
  }).join(' ')
})

function capitalize (word) {
  return word.length === 0
    ? ''
    : `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
}

// Outra forma de resolver
// function capitalize (word) {
//   return word.chartAt(0).toUpperCase() + word.slice(1).toLowerCase()
// }
