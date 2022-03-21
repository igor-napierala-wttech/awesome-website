<script setup></script>

<template>

  <div class="block_left_image">
    <div class="block_with_gallery">
      <div class="swiper image_slider">
        <div class="swiper-wrapper image-slider_wrapper">
          <div class="swiper-slide image-slider_slide">
            <div class="image-slider_image">
              <img src="../assets/space.jpg" alt="image1" />
            </div>
          </div>
          <div class="swiper-slide image-slider_slide">
            <div class="image-slider_image">
              <img src="../assets/space.jpg" alt="image2" />
            </div>
          </div>
          <div class="swiper-slide image-slider_slide">
            <div class="image-slider_image">
              <img src="../assets/space.jpg" alt="image3" />
            </div>
          </div>
          <div class="swiper-slide image-slider_slide">
            <div class="image-slider_image">
              <img src="../assets/space.jpg" alt="image4" />
            </div>
          </div>
          <div class="swiper-slide image-slider_slide">
            <div class="image-slider_image">
              <img src="../assets/space.jpg" alt="image5" />
            </div>
          </div>
          <div class="swiper-slide image-slider_slide">
            <div class="image-slider_image">
              <img src="../assets/space.jpg" alt="image6" />
            </div>
          </div>
      </div>
    </div>
    </div>
    <div class="content_block">
      <div class="content_center">
        <h1>HAPPY CLIENTS</h1>

        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          inventore consectetur dolores eius, enim totam eligendi tempore
          cupiditate molestias eveniet suscipit quasi quas eaque mollitia velit
          sunt sed, adipisci optio. :)
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block_left_image {
  background-color: var(--main-bgdiv-color);
  width: 100%;
  display: flex;
  min-height: 100%;
}
.block_image {
  height: 100%;
  width: 50%;
  z-index: 1;
}
.block_with_gallery {
  width: 50%;
  z-index: 1;
  background-color: black;
}
.content_block {
  width: 50%;
  height: 100%;
  display: flex;
}
.content_center {
  background-color: var(--main-bgdiv-color);
  padding: 20% 9%;
  border-radius: 4px;
  z-index: 10;
  text-align: center;
}
h1 {
  text-transform: uppercase;
  color: var(--text-color-darkness);
  margin: 0 0 15px 0;
  font-size: 26px;
  line-height: 1.1;
}
.description {
  margin-bottom: 30px;
  font-size: 17px;
  font-style: italic;
  color: var(--text-color-lightness);
}
p {
  margin: 0 0 1em;
  line-height: 26px;
}

.text {
  margin-bottom: 20px;
  font-size: 15.5px;
}
.image-slider{

}
.image-slider_wrapper{
  margin: 29% 0;
}
.image-slider_slide{
}
.image-slider_image{
    text-align: center;
    padding: 0;
    margin: 0;
}
.image-slider_image img{
    height: 55px;
    padding: 0;
    margin: 0;
}

</style>
