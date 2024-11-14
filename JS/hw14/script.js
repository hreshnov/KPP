// Ждем, пока весь документ будет готов (загружен)
$(document).ready(function() {
    // Назначаем обработчик события клика на элемент с классом .tabs-title
    $('.tabs-title').on('click', function() {
        // Убираем класс "active" у всех вкладок и контента
        $('.tabs-title').removeClass('active');
        $('.tabs-content li').removeClass('active');
        
        // Добавляем класс "active" к элементу, на который кликнули
        $(this).addClass('active');

        // Получаем id активной вкладки, который хранится в атрибуте data-tab
        var activeTabId = $(this).data('tab');

        // Добавляем класс "active" соответствующему элементу контента, используя полученный id
        $('#' + activeTabId).addClass('active');
    });
});
