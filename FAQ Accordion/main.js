// First Button
const plusBtn = document.getElementById('plus1')
const minusBtn = document.getElementById('minus1')
const answerDiv = document.querySelector('.answer')

plusBtn.addEventListener('click', () => {
  answerDiv.style.display = 'block';
  minusBtn.style.display = 'block';
  plusBtn.style.display = "none"
})

minusBtn.addEventListener('click', () => {
  answerDiv.style.display = 'none';
  plusBtn.style.display = 'block';
  minusBtn.style.display = "none"
})

// Second Button
const plusBtn2 = document.getElementById('plus2')
const minusBtn2 = document.getElementById('minus2')
const answerDiv2 = document.querySelector('.answer2')

plusBtn2.addEventListener('click', () => {
  answerDiv2.style.display = 'block';
  minusBtn2.style.display = 'block';
  plusBtn2.style.display = "none"
})

minusBtn2.addEventListener('click', () => {
  answerDiv2.style.display = 'none';
  plusBtn2.style.display = 'block';
  minusBtn2.style.display = "none"
})

// Third Button
const plusBtn3 = document.getElementById('plus3')
const minusBtn3 = document.getElementById('minus3')
const answerDiv3 = document.querySelector('.answer3')

plusBtn3.addEventListener('click', () => {
  answerDiv3.style.display = 'block';
  minusBtn3.style.display = 'block';
  plusBtn3.style.display = "none"
})

minusBtn3.addEventListener('click', () => {
  answerDiv3.style.display = 'none';
  plusBtn3.style.display = 'block';
  minusBtn3.style.display = "none"
})

// Fourth Button
const plusBtn4 = document.getElementById('plus4')
const minusBtn4 = document.getElementById('minus4')
const answerDiv4 = document.querySelector('.answer4')

plusBtn4.addEventListener('click', () => {
  answerDiv4.style.display = 'block';
  minusBtn4.style.display = 'block';
  plusBtn4.style.display = "none"
})

minusBtn4.addEventListener('click', () => {
  answerDiv4.style.display = 'none';
  plusBtn4.style.display = 'block';
  minusBtn4.style.display = "none"
})
