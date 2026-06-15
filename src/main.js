// Импорт базовых стилей приложения
import './css/reset.css';
import './css/base.css';

// Импорт библиотек
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Импорт модулей
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  // Очищаем прошлый результат и запускаем лоадер
  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      // Отрисовка галереи
      createGallery(data.hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        message: 'Something went wrong. Please try again.',
        position: 'topRight',
      });
    })
    .finally(() => {
      // Прячем лоадер в любом случае (успех или ошибка)
      hideLoader();
    });

  form.reset();
}
