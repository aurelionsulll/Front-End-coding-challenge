import { Swiper, Pagination } from 'swiper';
Swiper.use(Pagination);

const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'vertical',
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
		left: '10px',
	},
});
