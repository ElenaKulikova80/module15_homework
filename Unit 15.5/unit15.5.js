const screenSize = document.querySelector(".screenSize");
screenSize.addEventListener ('click',() => {
  alert('Ширина экрана=' + window.screen.width + ' Высота экрана=' + window.screen.height);
})