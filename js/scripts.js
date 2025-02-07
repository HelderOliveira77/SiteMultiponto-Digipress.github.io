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





// ____________

function Enviar() {

  var nome = document.getElementById("nomeid");

  if (nome.value != "") {
      alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
  }

}