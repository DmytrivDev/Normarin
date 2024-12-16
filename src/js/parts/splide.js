import { initSlider } from './splidecust';

const heroSplide = document.querySelector('.hero');
if (heroSplide) {
  initSlider(heroSplide, {
    type: 'fade', // Изменяем тип слайдера на 'fade'
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

let tableSliderInstance;
const table = document.querySelector('.table');
const tableRows = table?.querySelectorAll('.table__row');

const initOurproductSlider = () => {
  if (table && !tableSliderInstance) {
    tableSliderInstance = initSlider(table, {
      speed: 500,
      breakpoints: {
        960: {},
        500: {},
      },
    });

    const updateSlideStyles = () => {
      const activeIndexSlider = tableSliderInstance.index + 2;

      tableRows.forEach(row => {
        const childDiv = row.querySelectorAll('div');

        childDiv.forEach((div, index) => {
          const indCur = index + 1;
          const closRowColumn = div.closest('.column3');

          if (indCur > 1) {
            div.classList.remove('isAnimat');
            div.classList.remove('isChoose');
          }

          if (indCur === activeIndexSlider) {
            div.classList.add('isChoose');
            setTimeout(() => {
              div.classList.add('isAnimat');
            }, 150);
          }

          if (closRowColumn && activeIndexSlider === 4) {
            const targetDiv = closRowColumn.querySelectorAll('div');
            const targetDivLast = targetDiv[2];

            targetDivLast.classList.add('isChoose');
            setTimeout(() => {
              targetDivLast.classList.add('isAnimat');
            }, 150);
          }
        });
      });
    };

    tableSliderInstance.on('mounted move', updateSlideStyles);

    updateSlideStyles();
  }
};

const destroySliders = () => {
  if (tableSliderInstance) {
    tableSliderInstance.destroy();
    tableSliderInstance = null;
  }
};

const checkViewport = () => {
  initOurproductSlider();
  if (window.innerWidth > 960) {
    destroySliders();
  }
};

checkViewport();
window.addEventListener('resize', checkViewport);

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
