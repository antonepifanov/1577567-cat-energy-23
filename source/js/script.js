const navMain = document.querySelector(".menu")
const navToggle = document.querySelector(".menu__button")

navMain.classList.remove("menu--nojs")

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("menu--closed")) {
    navMain.classList.remove("menu--closed")
    navMain.classList.add("menu--opened")
  } else {
    navMain.classList.add("menu--closed")
    navMain.classList.remove("menu--opened")
  }
})

ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {center: [59.938635, 30.323118], zoom: 17}, {searchControlProvider: "yandex#search"}),
  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: "",
      balloonContent: "CatEnergy"
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: "default#image",
      // Своё изображение иконки метки.
      iconImageHref: "../img/map-pin.png",
      // Размеры метки.
      iconImageSize: [57, 53],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-15, -38]
    });
  myMap.geoObjects.add(myPlacemark)
  myMap.behaviors.disable("scrollZoom")
})

const initValidating = () => {
  const form = document.querySelector(".form")
  const inputsToValidate = form.querySelectorAll("input:required")
  form.addEventListener("submit", function() {
    for (let input of inputsToValidate) {
      if (!input.checkValidity()) {
        input.classList.add("input-field__input--invalid")
      } else if (input.classList.contains("input-field__input--invalid")) {
        input.classList.remove("input-field__input--invalid")
      }
    }
  })
}
initValidating()
