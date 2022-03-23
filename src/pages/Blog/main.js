import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

new Swiper(".image_slider", {
    //touch cursor
    simulateTouch: true,
    //speed
    touchRatio: 1,
    //hand
    grabCursor: true,
    //slides to show
    slidesPerView: 3,
    autoHeight: true,
    //infinity
    loop: true,
    //space between
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      //disable after manual use
      disableOnInteraction: false,
    },
    mousewheel: {
      sensivity: 1,
      eventsTarget: ".image_slider",
    },
    speed: 300,
  });
  