<script setup></script>

<template>
  <div class="sidebar_infoblock">
    <h3 class="sidebar_infoblock_name">POPULAR TAGS</h3>
    <ul class="sidebar_infoblock_list">
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_option_link" href="#"
          ><div class="sidebar_infoblock_list_option_link_div">
            PHOTOGRAPHY
            <span class="sidebar_infoblock_list_option_link_span">26</span>
          </div></a
        >
      </li>
      <div class="sidebar_infoblock_list_line"></div>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_option_link" href="#"
          ><div class="sidebar_infoblock_list_option_link_div">
            EQUIPMENT
            <span class="sidebar_infoblock_list_option_link_span">54</span>
          </div></a
        >
      </li>
      <div class="sidebar_infoblock_list_line"></div>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_option_link" href="#"
          ><div class="sidebar_infoblock_list_option_link_div">
            TRAVEL
            <span class="sidebar_infoblock_list_option_link_span">17</span>
          </div></a
        >
      </li>
      <div class="sidebar_infoblock_list_line"></div>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_option_link" href="#"
          ><div class="sidebar_infoblock_list_option_link_div">
            FASHION
            <span class="sidebar_infoblock_list_option_link_span">19</span>
          </div></a
        >
      </li>
      <div class="sidebar_infoblock_list_line"></div>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_option_link" href="#"
          ><div class="sidebar_infoblock_list_option_link_div">
            FOOD
            <span class="sidebar_infoblock_list_option_link_span">67</span>
          </div></a
        >
      </li>
      <div class="sidebar_infoblock_list_line"></div>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_option_link" href="#"
          ><div class="sidebar_infoblock_list_option_link_div">
            MACRO
            <span class="sidebar_infoblock_list_option_link_span">67</span>
          </div></a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
* {
  font-family: var(--font-family-text);
}
.sidebar_infoblock {
  text-align: left;
  display: block;
  width: calc(100% - 40px);
  padding: 20px;
  padding-right: 0;
  margin-top: 15px;
  margin-bottom: 15px;
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

.sidebar_infoblock_list {
  width: 100%;
  list-style: none;
  padding-left: 0;
}

.sidebar_infoblock_list_option_link_div {
  width: 100%;
  padding: 2px;
}
.sidebar_infoblock_list_option_link {
  transition: 0.2s;
  text-decoration: none;
  font-size: 14px;
  font-weight: 100;
  color: var(--text-color-darkness);
}
.sidebar_infoblock_list_option_link:hover {
  color: var(--selected-div-color);
}

.sidebar_infoblock_list_option_link_span {
  float: right;
  padding: 2px;
  margin-top: -3px;
  margin-left: -2px;
  background-color: #ececec;
}
.sidebar_infoblock_list_option_link:hover
  .sidebar_infoblock_list_option_link_span {
  background-color: var(--selected-div-color);
  color: white;
}
.sidebar_infoblock_list_line {
  border-bottom: 1px solid #ececec;
}
.sidebar_infoblock_list_option {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
