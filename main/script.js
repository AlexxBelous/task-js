// Необходимо повесить на кнопки обработчик событий. При клике должен выводиться текст click!


const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    console.log('click!')
  })
})