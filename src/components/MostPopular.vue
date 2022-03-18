<script setup></script>

<template>
  <div class="sidebar_infoblock_mostpopular">
    <h3 class="sidebar_infoblock_name">MOST POPULAR</h3>
    <div class="sidebar_infoblock_list_option_div">
      <img
        class="sidebar_infoblock_list_option_div_img"
        src="../assets/mostpop.jpg"
        alt="Most popular"
      />
      <div class="sidebar_infoblock_list_option_div_name">
        10 TOP CHOICES FOR AERIAL PHOTOGRAPHY<br />
        <span class="sidebar_infoblock_list_option_div_date">May 26, 2016</span>
      </div>
    </div>
    <div class="sidebar_infoblock_list_option_div">
      <img
        class="sidebar_infoblock_list_option_div_img"
        src="../assets/mostpop.jpg"
        alt="Most popular"
      />
      <div class="sidebar_infoblock_list_option_div_name">
        10 TOP CHOICES FOR AERIAL PHOTOGRAPHY<br />
        <span class="sidebar_infoblock_list_option_div_date">May 26, 2016</span>
      </div>
    </div>
    <div class="sidebar_infoblock_list_option_div">
      <img
        class="sidebar_infoblock_list_option_div_img"
        src="../assets/mostpop.jpg"
        alt="Most popular"
      />
      <div class="sidebar_infoblock_list_option_div_name">
        10 TOP CHOICES FOR AERIAL PHOTOGRAPHY<br />
        <span class="sidebar_infoblock_list_option_div_date">May 26, 2016</span>
      </div>
    </div>
    <div class="sidebar_infoblock_list_option_div">
      <img
        class="sidebar_infoblock_list_option_div_img"
        src="../assets/mostpop.jpg"
        alt="Most popular"
      />
      <div class="sidebar_infoblock_list_option_div_name">
        10 TOP CHOICES FOR AERIAL PHOTOGRAPHY<br />
        <span class="sidebar_infoblock_list_option_div_date">May 26, 2016</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: var(--font-family-text);
}
.sidebar_infoblock_mostpopular {
  text-align: left;
  display: block;
  width: calc(100% - 40px);
  padding: 20px;
  padding-right: 0;
  margin-top: 15px;
  margin-bottom: 15px;
}

.sidebar_infoblock_list_option_div {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
}

.sidebar_infoblock_name {
  text-align: left;
  width: 100%;
  margin-left: -20px;
  margin-bottom: 30px;
  padding-left: 20px;
  border-left: 3px solid;
  border-color: var(--selected-div-color);
}

.sidebar_infoblock_list_option_div_img {
  width: 25%;
  border-radius: 5px;
}
.sidebar_infoblock_list_option_div_name {
  font-size: 17px;
  margin-left: 10px;
  margin-top: 0;
}
.sidebar_infoblock_list_option_div_date {
  font-size: 14px;
  color: var(--text-color-lightness);
}
</style>
