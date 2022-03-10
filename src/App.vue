<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Awesome project" />
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

:root{
  --main-bg-color: #f1f1f1;
  --main-bgdiv-color: #ffffff;
  --text-color-darkness: #333333;
  --text-color-lightness: #bebebe;
  --text-color-light: #676767;
  --selected-div-color: #e94e4e;
  --arrow-div-color:#3b3b3b;
  --size-blog-name-text:3em;
  --size-blog-info-text:1em;
  --size-blog-main-text:1.3em;
  --font-blog-name-text:'Roboto', sans-serif;
  --font-blog-info-text:'Inconsolata', monospace;
  --font-blog-main-text:'Inconsolata', monospace;
  --spacing-blog-name-text:0.3em;
  --spacing-blog-info-text:0.2em;
  --spacing-blog-main-text:0.1em;
  --size-right-block-name-text:1.4em;
  --size-right-block-info-text:0.5em;
  --size-right-block-main-text:0.8em;
  --font-right-block-name-text:'Roboto', sans-serif;
  --font-right-block-info-text:'Inconsolata', monospace;
  --font-right-block-main-text:'Inconsolata', monospace;
  --spacing-right-block-name-text:0.1em;
  --spacing-right-block-info-text:0.1em;
  --spacing-right-block-main-text:0.1em;
}
</style>
