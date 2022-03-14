<script setup>
</script>

<template>
    <div class="top_image_post_block">
      <img class="top_image_post_block_Img_main" src="../assets/postphoto.jpg" alt="post image">
      <div class="top_image_post_block_info_block">
        <div class="top_image_post_block_info_block_header"><a class="top_image_post_block_info_block_header_link" src="#">PHOTOGRAPHY</a></div>
        <div class="top_image_post_block_info_block_name"><a class="top_image_post_block_info_block_name_link" src="#">5 REASONS YOU SHOULD FALL IN LOVE WITH PHOTOGRAPHY</a></div>
        <div class="top_image_post_block_info_block_date"><a class="top_image_post_block_info_block_date_link" src="#">May 26, 2016 - by Martin Vegas</a></div>
        <div class="top_image_post_block_info_block_mainText">Suspendisse imperdiet ante at tortor consequat consectetur. Quisque rhoncus blandit justo. Praesent congue convallis erat, utem dignissim...</div>
        <div class="top_image_post_block_info_block_dots"><a class="top_image_post_block_info_block_dots_link" src="#">...</a></div>
      </div>
  </div>
</template>

<style scoped>



.top_image_post_block{
  width: 100%;
  text-align: center;
  background-color: var(--main-bg-color);
  font-family: var(--font-family-text);
}


.top_image_post_block_Img_main{
  padding: 0px;
  margin: 0px;
  width: 100%;
  position: relative;
}

.top_image_post_block_info_block{
  position: relative;
  margin-top: -100px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--main-bgdiv-color);
  text-align: center;
  border-radius: 10px;
  z-index: 1000;
}

.top_image_post_block_info_block_header{
  padding-top: 25px;
  margin-left: auto;
  margin-right: auto;
  color: var(--text-color-light);
  font-size: var(--size-blog-info-text);
  width: 80%;
}

.top_image_post_block_info_block_name{
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  color: var(--text-color-darkness);
  font-size: var(--size-blog-name-text);
  font-weight: 600;
  width: 80%;
}

.top_image_post_block_info_block_date{
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  color: var(--text-color-lightness);
  font-size: var(--size-blog-info-text);
  width: 80%;
}

.top_image_post_block_info_block_mainText{
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  color: var(--text-color-light);
  font-size: var(--size-blog-main-text);
  width: 80%;
}
.top_image_post_block_info_block_dots{
  color: var(--text-color-light);
  font-size: var(--size-blog-name-text);
  margin-top: 30px;
}
.top_image_post_block_info_block_name_link{
  text-decoration: none;
  color: var(--text-color-darkness);
  transition: 0.3s;
  cursor: pointer;
}

.top_image_post_block_info_block_name_link:hover{
  color: var(--selected-div-color);
}

.top_image_post_block_info_block_dots_link{
  text-decoration: none;
  color: var(--text-color-lightness);
  transition: 0.3s;
  cursor: pointer;
}

.top_image_post_block_info_block_dots_link:hover{
  color: var(--selected-div-color);
}



.top_image_post_block_info_block_header_link,.top_image_post_block_info_block_date_link{
  text-decoration: none;
  color: var(--text-color-lightness);
  transition: 0.3s;
  cursor: pointer;
}

.top_image_post_block_info_block_header_link:hover,.top_image_post_block_info_block_date_link:hover{
  color: var(--text-color-light);
}
</style>
