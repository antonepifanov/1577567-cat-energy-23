ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938635, 30.323118],
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../img/map-pin.png',
          // Размеры метки.
          iconImageSize: [57, 53],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -38]
      });
  myMap.geoObjects
      .add(myPlacemark)
});
