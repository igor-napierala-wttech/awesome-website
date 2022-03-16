<script setup></script>

<template>
  <div class="searchblock">
    <form action="" class="searchblock_form">
      <input
        class="searchblock_form_inputtext"
        type="text"
        placeholder="Search..."
      /><button class="searchblock_form_button">
        <i class="fa fa-search"></i>
      </button>
    </form>
  </div>
</template>

<style scoped>
.searchblock_form_button {
  cursor: pointer;
  font-size: var(--size-blog-main-text);
  position: relative;
  margin-left: -35px;
  border: 0px;
  background-color: var(--main-bgdiv-color);
  padding-right: 0px;
  transition: 0.1s;
}

.searchblock_form_inputtext {
  font-size: var(--size-blog-main-text);
  position: relative;
  padding: 15px;
  padding-right: 35px;
  border: 1px solid;
  border-color: var(--text-color-lightness);
  border-radius: 4px;
  transition: 0.25s;
}

.searchblock_form_inputtext:focus {
  outline: none;
  border: 1px solid;
  border-color: var(--selected-div-color);
}

.searchblock_form_button:hover {
  color: var(--text-color-light);
}
</style>
