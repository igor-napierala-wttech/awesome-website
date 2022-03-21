<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Blockimageleft from "./components/Block-image_left.vue";
import Blockimageright from "./components/Block-image_right.vue";
import Blockcarousel from "./components/Block-carousel.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="wrapper">
      <header class="header">
        <div class="header_inner"></div>
      </header>
      <div class="wrapper_inner">
        <div class="content_inner">
  <Blockimageleft />
  <Blockimageright />
  <Blockcarousel />
  </div>
  </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
:root {
  --main-bg-color: #f1f1f1;
  --main-bgdiv-color: #ffffff;
  --text-color-darkness: #333333;
  --text-color-lightness: #bebebe;
  --text-color-light: #777777;
  --selected-div-color: #e94e4e;
  --arrow-div-color: #3b3b3b;
  --dark-border-btn-color:#222;
  --red-border-and-bg-btn-color:#ea4e4e;
  --red-hover-btn-kolor:#d23333;
  --size-blog-name-text: 2.2em;
  --size-blog-info-text: 0.9em;
  --size-blog-main-text: 1em;
  --font-family-text: "Inconsolata", monospace;
  --spacing-blog-name-text: 0.3em;
  --spacing-blog-info-text: 0.2em;
  --spacing-blog-main-text: 0.1em;
  --size-right-block-name-text: 1.4em;
  --size-right-block-info-text: 0.5em;
  --size-right-block-main-text: 0.8em;
  --font-right-block-main-text: "Inconsolata", monospace;
  --spacing-right-block-name-text: 0.1em;
  --spacing-right-block-info-text: 0.1em;
  --spacing-right-block-main-text: 0.1em;
}
* {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
}
body {
  position: relative;
  background-color: var(--main-bg-color);
  font-family: var(--font-family-text);
  line-height: 1.6;
  font-size: 17px;
  color: var(--text-color-darkness);
}
.header {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 60px;
  background-color: green;
  z-index: 99998;
  overflow: hidden;
}
.wrapper_inner {
  margin: 3%;
  position: relative;
}
.content_inner {
  margin-left: 60px;
}
</style>
