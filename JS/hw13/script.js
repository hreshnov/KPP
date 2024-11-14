// Получаем кнопку переключения темы по ID
const themeToggleButton = document.getElementById('theme-toggle');

// Проверяем, если в localStorage сохранена информация о темной теме
if (localStorage.getItem('theme') === 'dark') {
  // Добавляем класс dark-mode на body, чтобы включить темную тему
  document.body.classList.add('dark-mode');
}

// Добавляем обработчик события на кнопку переключения темы
themeToggleButton.addEventListener('click', () => {
  // Переключаем класс dark-mode на body
  document.body.classList.toggle('dark-mode');
  
  // Если класс dark-mode добавлен, сохраняем тему в localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    // Если класс dark-mode удален, удаляем информацию о теме из localStorage
    localStorage.removeItem('theme');
  }
});
