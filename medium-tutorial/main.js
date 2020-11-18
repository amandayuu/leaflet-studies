// Define a localização inicial
var initialCoordinates = [-22.91, -43.2];
// Define o zoom inicial
var initialZoomLevel = 13;

// Criamos o nosso clássico Hello World
// Ele irá aparecer quando clicar nessa coordenada em seu mapa
// um evento de popup com a msg
var helloCoordinates = [-22.903719, -43.1760605];
var helloMarkerMsg = "Hello world!";
// Aqui é personalizado o marcador
var helloIconProps = {
// Endereço da imagem
  iconUrl: "http://muxi.com.br/app/webroot/img/maps-marker.png",
//   Tamanho do ícon (array com largura e altura em pixels)
  iconSize: [44, 59],
//   âncora do ícone (que ponta da img representa a ponta do marcador)
  iconAnchor: [22, 59],
//   aonde a pont do popup aparece, em relação à âncore original
  popupAnchor: [0, -50],
};
var helloIcon = L.icon(helloIconProps);
// L: objeto global do leaflet
// Instanciamos o mapa, é definido a localização inicial e qual o zoom que ele vai ter
var map = L.map("map").setView(initialCoordinates, initialZoomLevel);

L.marker(helloCoordinates, {icon: helloIcon})
    .addTo(map)
    .bindPopup(helloMarkerMsg)
    .openPopup();

// Adiciona as imagens de fundo , definimos o ID, o tile size e o zoom
// Temos  o token de acesso na url
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);
