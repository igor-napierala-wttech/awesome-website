<script setup>
</script>

<template>
    <div class="top_image_post_block">
      <img class="main_img_post_block" src="../assets/postphoto.jpg" alt="post image">
    <div class="info_post_block">
      <div class="header_info_post_block"><a src="#">PHOTOGRAPHY</a></div>
      <div class="name_info_post_block"><a src="#">5 REASONS YOU SHOULD FALL IN LOVE WITH PHOTOGRAPHY</a></div>
      <div class="date_info_post_block"><a src="#">May 26, 2016 - by Martin Vegas</a></div>
      <div class="main_text_info_post_block">Suspendisse imperdiet ante at tortor consequat consectetur. Quisque rhoncus blandit justo. Praesent congue convallis erat, utem dignissim...</div>
      <div class="dots_info_post_block"><a src="#">...</a></div>
    </div>
  </div>
</template>

<style scoped>
template{
  background-color: var(--main-bg-color);
}



.top_image_post_block{
  width: 100%;
  text-align: center;
  background-color: var(--main-bg-color);
  font-family: var(--font-family-text);
}


.main_img_post_block{
  padding: 0px;
  margin: 0px;
  width: 100%;
  position: relative;
}

.info_post_block{
  position: relative;
  margin-top: -100px;
  width: 80%;
  margin-left:auto;
  margin-right:auto;
  background-color: var(--main-bgdiv-color);
  text-align: center;
  border-radius: 10px;
  z-index: 1000;
}

.header_info_post_block{
  padding-top: 25px;
  margin-left:auto;
  margin-right:auto;
  color: var(--text-color-light);
  font-size: var(--size-blog-info-text);
  width: 80%;
}

.name_info_post_block{
  margin-top: 20px;
  margin-left:auto;
  margin-right:auto;
  color: var(--text-color-darkness);
  font-size: var(--size-blog-name-text);
  font-weight: 600;
  width: 80%;
}

.date_info_post_block{
  margin-top: 20px;
  margin-left:auto;
  margin-right:auto;
  color: var(--text-color-lightness);
  font-size: var(--size-blog-info-text);
  width: 80%;
}

.main_text_info_post_block{
  margin-top: 20px;
  margin-left:auto;
  margin-right:auto;
  color: var(--text-color-light);
  font-size: var(--size-blog-main-text);
  width: 80%;
}
.dots_info_post_block{
  color: var(--text-color-light);
  font-size: var(--size-blog-name-text);
  margin-top: 30px;
}
.name_info_post_block>a{
  text-decoration: none;
  color: var(--text-color-darkness);
  transition: 0.3s;
  cursor: pointer;
}

.name_info_post_block>a:hover{
  color: var(--selected-div-color);
}

.dots_info_post_block>a{
  text-decoration: none;
  color: var(--text-color-lightness);
  transition: 0.3s;
  cursor: pointer;
}

.dots_info_post_block>a:hover{
  color: var(--selected-div-color);
}



.header_info_post_block>a,.date_info_post_block>a{
  text-decoration: none;
  color: var(--text-color-lightness);
  transition: 0.3s;
  cursor: pointer;
}

.header_info_post_block>a:hover,.date_info_post_block>a:hover{
  color: var(--text-color-light);
}
</style>
