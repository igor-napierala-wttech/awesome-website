<script setup></script>

<template>
  <div class="sidebar_infoblock_meta">
    <h3 class="sidebar_infoblock_name">META</h3>
    <ul class="sidebar_infoblock_list">
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_option_link" href="#">Log In</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_option_link" href="#">Entries RSS</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_option_link" href="#">Comments RSS</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_option_link" href="#">WordPress.org</a>
      </li>
    </ul>
    <div class="sidebar_infoblock_content"></div>
  </div>
</template>

<style scoped>
.sidebar_infoblock_meta {
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
  float: left;
  width: 100%;
  margin-left: -20px;
  margin-bottom: 30px;
  padding-left: 20px;
  border-left: 3px solid var(--selected-div-color);
}

.sidebar_infoblock_list {
  list-style-type: none;
  padding-left: 0;
  font-weight: 200;
}

.sidebar_infoblock_list_option_link {
  color: var(--text-color-lightness);
  text-decoration: none;
  font-size: 14px;
}

.sidebar_infoblock_list_option_link:hover {
  color: var(--selected-div-color);
}
</style>
