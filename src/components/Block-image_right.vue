<script setup></script>

<template>
  <div class="block_right_image">
    <div class="content_block">
      <div class="content_right">
        <h1>WHAT I DO?</h1>
        <p class="description">A little bit of my work</p>
        <p class="text">
          Pellentesque nec convallis nisi, in mollis nulla. Aliquam eget elit
          risus. Quisque vitae commodo libero, eu efficitur ligula. Cras
          vulputate arcu id interdum pretium. Cras eu blandit massa, at semper
          est. Curabitur id blandit purus. Curabitur egestas, lacus quis
          facilisis tempor.
        </p>
        <div class="block_button">
          <button class="btn btn-primary">VIEW MY WORK</button>
          <button class="btn btn-dark-border">CONTACT ME</button>
        </div>
      </div>
    </div>
    <div class="block_image">
      <img src="../assets/space.jpg" alt="image" />
    </div>
  </div>
</template>

<style scoped>
.block_right_image {
  background-color: var(--main-bgdiv-color);
  height: 560px;
  width: 100%;
  display: flex;
}
.block_image {
  height: 100%;
  width: 50%;
  z-index: 1;
}
img {
  width: 100%;
  height: 100%;
}
.content_block {
  width: 50%;
  height: 100%;
  display: flex;
}
.content_right {
  background-color: var(--main-bgdiv-color);
  margin: auto -15% auto 0;
  padding: 10% 10% 10% 30%;
  text-align: right;
  border-radius: 4px;
  z-index: 10;
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
.btn {
  position: relative;
  margin: 8px 4px;
  padding: 7px 20px;
  border: 2px solid rgba(0, 0, 0, 0);
  transition: all 0.2s ease-in-out;
  font-size: 15px;
  text-transform: uppercase;
  line-height: 1.42857143;
  border-radius: 4px;
  cursor: pointer;
}
.btn-primary {
  color: var(--main-bgdiv-color);
  background-color: var(--red-border-and-bg-btn-color);
  border-color: var(--red-border-and-bg-btn-color);
}
.btn-primary:hover {
  color: var(--main-bgdiv-color);
  background-color: var(--red-hover-btn-kolor);
  border-color: var(--red-hover-btn-kolor);
}
.btn-dark-border {
  color: var(--dark-border-btn-color);
  background-color: transparent;
  border: 2px solid var(--dark-border-btn-color);
  box-shadow: none;
}
.btn-dark-border:hover {
  background-color: var(--dark-border-btn-color);
  color: var(--main-bgdiv-color);
}
</style>
