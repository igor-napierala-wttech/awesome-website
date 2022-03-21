<script setup></script>

<template>
  <div class="sidebar_infoblock">
    <h3 class="sidebar_infoblock_name">POPULAR TAGS</h3>
    <ul class="sidebar_infoblock_list">
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#portfolio</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#multipurpose</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#minimal</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#agency</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#creatives</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#freelancers</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#design</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#bootstrap</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#simple</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#creative</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#retina</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#blog</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#wordpress</a>
      </li>
      <li class="sidebar_infoblock_list_option">
        <a class="sidebar_infoblock_list_link" href="#">#black & white</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
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
  border-left: 3px solid var(--selected-div-color);
}

.sidebar_infoblock_list {
  list-style-type: none;
  display: inline-block;
  width: 100%;
  padding-left: 0;
}

.sidebar_infoblock_list_link {
  text-decoration: none;
  color: white;
  background-color: var(--text-color-darkness);
  padding: 3px 8px;
  font-size: 14px;
  transition: 0.2s;
}

.sidebar_infoblock_list_link:hover {
  background-color: var(--selected-div-color);
}

.sidebar_infoblock_list_option {
  margin: 5px 5px;
  width: auto;
  display: inline-block;
}
</style>
