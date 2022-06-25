import Swiper, { Autoplay } from 'swiper'
Swiper.use([Autoplay])

const slider = () => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },



    });
}
export default slider