/**
 * sliders.js
 * 
 * Copyright (c) 2023 Moiseev Evgeny
 * Organization: WebisGroup
 * 
 * Скрипты инициализации и обработки слайдеров.
 */


/**
 * Инициализация слайдеров по атрибуту data-swiper.
 * 
 * Используется библиотека swiper.js: assets/js/libs/swiper.min.js
 * Документация: https://swiperjs.com/swiper-api
 * Примеры: https://swiperjs.com/demos
 * 
 * Требуется подключение стилей: assets/scss/_swiper.scss
 * 
 * Данный скрипт необходим для того, чтобы не привязываться к стандартным классам свипер-слайдера. На сайте слайдера в документации предоставляется HTML разметка c определёнными классами, без которых он не буедет функционировать. Скрипт же просто расставляет эти обязательные классы и поэтому нет необходимости о них думать. Структура HTML разметки слайдера должна быть такой же, как и указано в документации, но классы могут быть какими угодно. Необходимые поставятся автоматически.
 */
document.querySelectorAll('[data-swiper]').forEach(slider => {
	slider.classList.add('swiper');

	if (slider.classList.contains('swiper-bild')) return;

	const sliderWrapper = slider.firstElementChild;
	const sliderItems = Array.from(sliderWrapper.children);

	sliderWrapper.classList.add('swiper-wrapper');

	sliderItems.forEach(slide => slide.classList.add('swiper-slide'));

	slider.classList.add('swiper-bild');
});

//---------------------------------------------------------------

function isSlidesOutside(itemsWrapper, container = null) {
	if (!itemsWrapper) return;

	const slides = itemsWrapper.children;

	const totalSlidesWidth = Array.from(slides).reduce((acc, slide) => acc + slide.offsetWidth, 0);
	const containerWidth = container ? container.offsetWidth : window.innerWidth;

	return totalSlidesWidth > containerWidth;
}

//===============================================================
//===============================================================
//===============================================================


/**
 * Инициализация слайдера
 */

const isProductSlidesOutside = isSlidesOutside(document.querySelector('.products-slider__slides'));

const productsSlider = new Swiper('.products-slider', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	// centeredSlides: isProductSlidesOutside,
	slidesPerView: 'auto',
	loop: true,
	navigation: {
		prevEl: '.products-slider__arrow_prev',
		nextEl: '.products-slider__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isProductSlidesOutside && swiper.el.classList.add('_outside'),
	}
});


/**
 * Инициализация слайдера
 */
const isAdditionSlidesOutside = isSlidesOutside(document.querySelector('.addition-slider__slides'));

const additionSlider = new Swiper('.addition-slider', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	loop: true,
	slidesPerView: 'auto',
	navigation: {
		prevEl: '.addition-slider__arrow_prev',
		nextEl: '.addition-slider__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isAdditionSlidesOutside && swiper.el.classList.add('_outside'),
	}
});

/**
 * Инициализация слайдера
 */
const isOthersPosibilitieSlidesOutside = isSlidesOutside(document.querySelector('.others-posibilities-slider__slides'));

const othersPosibilitiesSlider = new Swiper('.others-posibilities-slider', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	loop: true,
	slidesPerView: 'auto',
	navigation: {
		prevEl: '.others-posibilities-slider__arrow_prev',
		nextEl: '.others-posibilities-slider__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isOthersPosibilitieSlidesOutside && swiper.el.classList.add('_outside'),
	}
});

/**
 * Инициализация слайдера
 */

const isCaseSlidesOutside = isSlidesOutside(document.querySelector('.cases-slider__slides'));

const casesSlider = new Swiper('.cases-slider', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	// centeredSlides: isCaseSlidesOutside,
	slidesPerView: 'auto',
	loop: true,
	navigation: {
		prevEl: '.cases-slider__arrow_prev',
		nextEl: '.cases-slider__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isCaseSlidesOutside && swiper.el.classList.add('_outside'),
	}
});

/**
 * Инициализация слайдера
 */

const isExampleSlidesOutside = isSlidesOutside(document.querySelector('.examples-slider__slides'));

const exampleSlider = new Swiper('.examples-slider', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	// centeredSlides: isExampleSlidesOutside,
	slidesPerView: 'auto',
	loop: true,
	navigation: {
		prevEl: '.examples-slider__arrow_prev',
		nextEl: '.examples-slider__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isExampleSlidesOutside && swiper.el.classList.add('_outside'),
	}
});

/**
 * Инициализация слайдера
 */
const isIndustrySlidesOutside = isSlidesOutside(document.querySelector('.industry-slider__slides'));

const industrySlider = new Swiper('.industry-slider', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	// centeredSlides: isIndustrySlidesOutside,
	slidesPerView: 'auto',
	loop: true,
	navigation: {
		prevEl: '.industry-slider__arrow_prev',
		nextEl: '.industry-slider__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isIndustrySlidesOutside && swiper.el.classList.add('_outside'),
	}
});

/**
 * Инициализация слайдера
 */
const isResourceSlidesOutside = isSlidesOutside(document.querySelector('.resources-slider__slides'));

const resourcesSlider = new Swiper('.resources-slider', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	// centeredSlides: isResourceSlidesOutside,
	slidesPerView: 'auto',
	loop: true,
	navigation: {
		prevEl: '.resources-slider__arrow_prev',
		nextEl: '.resources-slider__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isResourceSlidesOutside && swiper.el.classList.add('_outside'),
	}
});

/**
 * Инициализация слайдера
 */
const isPhotoSlidesOutside = isSlidesOutside(document.querySelector('.photos-slider__slides'));

const photosSlider = new Swiper('.photos-slider', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	// centeredSlides: isPhotoSlidesOutside,
	slidesPerView: 'auto',
	loop: true,
	navigation: {
		prevEl: '.photos-slider__arrow_prev',
		nextEl: '.photos-slider__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isPhotoSlidesOutside && swiper.el.classList.add('_outside'),
	}
});

/**
 * Инициализация слайдера
 */
const isAdvantageSlidesOutside = isSlidesOutside(document.querySelector('.advantages-slider__slides'), document.querySelector('.advantages__container'));

const advantagesSlider = new Swiper('.advantages-slider', {
	speed: 500,
	spaceBetween: isAdvantageSlidesOutside ? 97 : 0,
	loop: true,
	navigation: {
		prevEl: '.advantages-slider__arrow_prev',
		nextEl: '.advantages-slider__arrow_next',
		disabledClass: "_disabled",
	},
	breakpoints: {
		320: { slidesPerView: 2 },
		480: { slidesPerView: 3 },
		768: { slidesPerView: 4 },
		992: { slidesPerView: 5 },
	},
	on: {
		init: (swiper) => isAdvantageSlidesOutside && swiper.el.classList.add('_outside'),
	}
});

/**
 * Инициализация слайдера
 */
const reviewsSlider = new Swiper('.reviews-slider', {
	speed: 500,
	spaceBetween: 70,
	loop: true,
	navigation: {
		prevEl: '.reviews-slider__arrow_prev',
		nextEl: '.reviews-slider__arrow_next',
		disabledClass: "_disabled",
	},
	breakpoints: {
		320: { slidesPerView: 1 },
		992: { slidesPerView: 2 },
	}
});

/**
 * Инициализация слайдера
 */
const actionsSlider = new Swiper('.actions-slider', {
	speed: 500,
	spaceBetween: 15,
	loop: true,
	navigation: {
		prevEl: '.actions-slider__arrow_prev',
		nextEl: '.actions-slider__arrow_next',
		disabledClass: "_disabled",
	},
	breakpoints: {
		320: { slidesPerView: 1 },
		660: { slidesPerView: 2 },
		992: { slidesPerView: 3 },
	}
});

/**
 * Инициализация слайдера
 */
const isDesign1SlidesOutside = isSlidesOutside(document.querySelector('.design-slider-1__slides'));

const designSlider1 = new Swiper('.design-slider-1', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	loop: true,
	slidesPerView: 'auto',
	navigation: {
		prevEl: '.design-slider-1__arrow_prev',
		nextEl: '.design-slider-1__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isDesign1SlidesOutside && swiper.el.classList.add('_outside'),
	}
});


/**
 * Инициализация слайдера
 */
const isDesign2SlidesOutside = isSlidesOutside(document.querySelector('.design-slider-2__slides'));

const designSlider2 = new Swiper('.design-slider-2', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	loop: true,
	slidesPerView: 'auto',
	navigation: {
		prevEl: '.design-slider-2__arrow_prev',
		nextEl: '.design-slider-2__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isDesign2SlidesOutside && swiper.el.classList.add('_outside'),
	}
});

/**
 * Инициализация слайдера
 */
const isDesign3SlidesOutside = isSlidesOutside(document.querySelector('.design-slider-3__slides'));

const designSlider3 = new Swiper('.design-slider-3', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	loop: true,
	slidesPerView: 'auto',
	navigation: {
		prevEl: '.design-slider-3__arrow_prev',
		nextEl: '.design-slider-3__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isDesign3SlidesOutside && swiper.el.classList.add('_outside'),
	}
});

/**
 * Инициализация слайдера
 */
const isDesign4SlidesOutside = isSlidesOutside(document.querySelector('.design-slider-4__slides'));

const designSlider4 = new Swiper('.design-slider-4', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	loop: true,
	slidesPerView: 'auto',
	navigation: {
		prevEl: '.design-slider-4__arrow_prev',
		nextEl: '.design-slider-4__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isDesign4SlidesOutside && swiper.el.classList.add('_outside'),
	}
});


/**
 * Инициализация слайдера
 */
const isDesign5SlidesOutside = isSlidesOutside(document.querySelector('.design-slider-5__slides'));

const designSlider5 = new Swiper('.design-slider-5', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	loop: true,
	slidesPerView: 'auto',
	navigation: {
		prevEl: '.design-slider-5__arrow_prev',
		nextEl: '.design-slider-5__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isDesign5SlidesOutside && swiper.el.classList.add('_outside'),
	}
});


/**
 * Инициализация слайдера
 */
const isDesign6SlidesOutside = isSlidesOutside(document.querySelector('.design-slider-6__slides'));

const designSlider6 = new Swiper('.design-slider-6', {
	speed: 500,
	spaceBetween: 15,
	slidesOffsetBefore: 15 / 2,
	loop: true,
	slidesPerView: 'auto',
	navigation: {
		prevEl: '.design-slider-6__arrow_prev',
		nextEl: '.design-slider-6__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => isDesign6SlidesOutside && swiper.el.classList.add('_outside'),
	}
});


/**
 * Инициализация слайдера галереи
 */

const oboutSliderSmall = new Swiper('.obout-slider-small', {
	speed: 500,
	slidesPerView: 1,
	spaceBetween: 30,
	slidesPerView: 'auto',
	loop: true,
	on: {
		init: (swiper) => swiper.slideTo(Math.floor(swiper.slides.length / 2)),
	}
});

const oboutSliderMain = new Swiper('.obout-slider-main', {
	speed: 500,
	spaceBetween: 30,
	loop: true,
	slidesPerView: 1,
	navigation: {
		prevEl: '.obout-slider-main__arrow_prev',
		nextEl: '.obout-slider-main__arrow_next',
		disabledClass: "_disabled",
	},
	on: {
		init: (swiper) => swiper.slideTo(Math.floor(swiper.slides.length / 2)),
	}
});

/**
 * Инициализация слайдера
 */
const howSlider = new Swiper('.how-slider', {
	speed: 500,
	spaceBetween: 15,
	navigation: {
		prevEl: '.how-slider__arrow_prev',
		nextEl: '.how-slider__arrow_next',
		disabledClass: "_disabled",
	},
	breakpoints: {
		320: { slidesPerView: 1 },
		660: { slidesPerView: 2 },
		992: { slidesPerView: 3 },
	}
});

/**
 * Инициализация слайдера
 */
const studySider1 = new Swiper('.study-slider_1', {
	speed: 500,
	spaceBetween: 15,
	slidesPerView: 1,
	loop: true,
	navigation: {
		prevEl: '.study-slider_1 .study-slider__arrow_prev',
		nextEl: '.study-slider_1 .study-slider__arrow_next',
		disabledClass: "_disabled",
	},
});

/**
 * Инициализация слайдера
 */
const studySider2 = new Swiper('.study-slider_2', {
	speed: 500,
	spaceBetween: 15,
	slidesPerView: 1,
	loop: true,
	navigation: {
		prevEl: '.study-slider_2 .study-slider__arrow_prev',
		nextEl: '.study-slider_2 .study-slider__arrow_next',
		disabledClass: "_disabled",
	},
});

/**
 * Инициализация слайдера
 */
const bigPhotosSlider = new Swiper('.big-photos-slider', {
	speed: 500,
	spaceBetween: 15,
	slidesPerView: 1,
	loop: true,
	navigation: {
		prevEl: '.big-photos-slider__arrow_prev',
		nextEl: '.big-photos-slider__arrow_next',
		disabledClass: "_disabled",
	},
});



