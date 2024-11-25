// Инициализация динамической адаптации
new Adapt();

// Инициализация модального окна
const modal = new Modal({animation: 'fadeIn'});

// Инициализация главного меню
new Menu('main-menu', { alwaysClick: true });


new Spoiler('filter');

new Spoiler('base');

new Spoiler('spoiler');


// Инициализация клика на слайдах продукции
document.querySelectorAll('.product-slide__head').forEach(elem => {
	const contentBlock = elem.closest('.product-slide__body');
	elem.addEventListener('click', () => contentBlock.classList.toggle('_active'));
});

// Инициализация клика на слайдах отраслей
document.querySelectorAll('.industry-slide__head').forEach(elem => {
	const contentBlock = elem.closest('.industry-slide__body');
	elem.addEventListener('click', () => contentBlock.classList.toggle('_active'));
});