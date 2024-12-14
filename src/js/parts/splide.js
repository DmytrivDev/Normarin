import { initSlider } from './splidecust';

const heroSplide = document.querySelector('.hero');
if (heroSplide) {
  initSlider(heroSplide, {
    type: 'fade', // Изменяем тип слайдера на 'fade'
    perPage: 1,
    speed: 1000, // Скорость анимации (по желанию)
    rewind: true, // Позволяет возвращаться к первому слайду после последнего
    interval: 4000, // Интервал автопрокрутки в миллисекундах
    autoplay: true, // Включаем автопрокрутку
    breakpoints: {
      960: {},
      500: {},
    },
  });
}

// const elemSplide = document.querySelector('.elem');
// if (elemSplide) {
//   initSlider(elemSplide, {
//     perPage: 2,
//     breakpoints: {
//       960: {},
//       500: {},
//     },
//   });
// }

// const elemSplides = document.querySelectorAll('.elem');
// elemSplides?.forEach(container => {
//   initSlider(container, {
//     perPage: 2,
//     breakpoints: {
//       960: {},
//       500: {},
//     },
//   });
// });
