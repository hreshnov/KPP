// Обработчик кликов по ссылкам в навигации (.nav a)
document.querySelectorAll('.nav a').forEach(anchor => {
  // Добавляем обработчик события на клик по каждой ссылке
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Отменяем стандартное поведение ссылки (переход по URL)
    
    const targetId = this.getAttribute('href'); // Получаем ID целевого элемента из атрибута href
    // Прокручиваем страницу к целевому элементу с плавной анимацией
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Создаём кнопку для прокрутки наверх страницы
const toTopButton = document.createElement('div');
toTopButton.id = 'toTop'; // Устанавливаем id для кнопки
toTopButton.innerHTML = '↑'; // Вставляем символ стрелки вверх
document.body.appendChild(toTopButton); // Добавляем кнопку в body документа

// Добавляем обработчик события прокрутки страницы
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    // Если прокручена больше чем одна высота окна, показываем кнопку
    toTopButton.style.display = 'flex';
  } else {
    // Иначе скрываем кнопку
    toTopButton.style.display = 'none';
  }
});

// Обработчик клика по кнопке "наверх"
toTopButton.addEventListener('click', () => {
  // Прокручиваем страницу обратно наверх с плавной анимацией
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Используем jQuery для обработки кликов по кнопке .toggle-btn в блоке .clients
$(document).ready(function() {
  $('.clients .toggle-btn').click(function() {
    // Находим ближайший кликнутому элементу блок .clients и скрываем/показываем абзац (<p>)
    $(this).closest('.clients').find('p').slideToggle();
  });
});

// Обработчик клика по кнопке #toggle-gallery для отображения/скрытия галереи
$('#toggle-gallery').on('click', function() {
  // Переключаем видимость контейнера галереи
  $('.gallery-container').slideToggle();
});
