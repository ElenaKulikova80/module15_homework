const wsUri = "wss://echo.websocket.org/";

const inpText = document.querySelector('.inp');
const chat = document.getElementById("chat-output");
const btnSend = document.querySelector('.btn-send');
const btnGeo = document.querySelector('.btn-geo');
const mapLink = document.querySelector('#map-link');
const status = document.getElementById("status");

let websocket;

function  pageLoaded (){
  websocket = new WebSocket(wsUri);
  websocket.onmessage = function(evt) {
    writeToScreen(
      '<span style="color: blue;">RESPONSE: ' + evt.data+'</span>'
    );
  };
}
const error = ()=> {
  status.textContent='Невозможно получить ваше местоположение.';
}

const succes = (position) =>{
  console.log('position', position);
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  
  status.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  mapLink.textContent = 'Ссылка на карту';
}

function writeToScreen(message){
  let pre = document.createElement('p');
  pre.innerHTML = message;
  chat.appendChild(pre);
}

btnSend.addEventListener('click', () => {
  const message = inpText.value;  
  writeToScreen(message);
  websocket.send(message);
});

btnGeo.addEventListener('click', () => {
  mapLink.href='';
  mapLink.textContent='';
  if(!navigator.geolocation) {
    status.textContent='Geolocation не поддерживается вашим браузером';
  } else {
    status.textContent='Определение местоположения...';
    navigator.geolocation.getCurrentPosition(succes,error);
  };
})
document.addEventListener("DOMContentLoaded", pageLoaded);