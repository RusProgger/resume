// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
// Проверяем предпочтение тёмного режима на уровне ОС
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Получаем предпочтение темы пользователя из локального хранилища, если оно доступно
const currentTheme = localStorage.getItem("theme");
// Если текущая тема в localStorage равна "dark"…
if (currentTheme == "dark") {
  // …переключаем класс .dark-theme для <body>
  document.body.classList.toggle("dark-mode");
  // В противном случае, если текущая тема в localStorage равна "light"…
} else if (currentTheme == "light") {
  // …переключаем класс .light-theme для <body>
  document.body.classList.toggle("light-mode");
}
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
  // Если у пользователя тёмный режим ОС и он соответствует нашему классу .dark-mode…
  if (prefersDarkScheme.matches) {
    // …тогда переключаем класс светлого режима
    document.body.classList.toggle("light-mode");
    // …но используем .dark-mode, если класс .light-mode уже находится в <body>
    let theme = document.body.classList.contains("light-mode") ? "light" : "dark";
  } else {
    // В противном случае, делаем то же самое, но для .dark-mode
    document.body.classList.toggle("dark-mode");
    let theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  }
  // В конце сохраняем текущее предпочтение в localStorage, чтобы продолжить его использовать
  localStorage.setItem("theme", theme);
});