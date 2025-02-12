var button = document.getElementById('read_button');

button.addEventListener('click', function () {
  var card = document.querySelector('.card');
  card.classList.toggle('active');
  if (card.classList.contains('active')) {
    return button.textContent = '- INFO';
  }
  button.textContent = '+ INFO';
}
)



// CARROSSEL MULTIPONTO
/*!
  * Bootstrap v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
