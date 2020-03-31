 







const weatherForm = document.querySelector('form')
const weatherInput = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const value = weatherInput.value

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetch(`http://localhost:3000/weather?address=${value}`).then((res) => {

    res.json().then((data) => {

      if (data.error) {
         messageOne.textContent = data.error
      }else {
         messageOne.textContent = data.location
         messageTwo.textContent = data.forecast
      }
    })
  })

})
