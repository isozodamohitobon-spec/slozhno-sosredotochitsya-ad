const themeButtons = document.querySelectorAll('.header__theme-menu-button');

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Определяем тему по классу кнопки
    let theme = '';
    if (button.classList.contains('header__theme-menu-button_type_light')) {
      theme = 'theme-light';
    } else if (button.classList.contains('header__theme-menu-button_type_dark')) {
      theme = 'theme-dark';
    } else if (button.classList.contains('header__theme-menu-button_type_auto')) {
      theme = 'theme-auto';
    }

    // Меняем класс у <html>
    document.documentElement.className = theme;
    
    // Переключаем активную кнопку
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });
    button.classList.add('header__theme-menu-button_active');
    button.setAttribute('disabled', 'true');
  });
});
