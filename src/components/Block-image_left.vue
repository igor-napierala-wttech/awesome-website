<script setup></script>

<template>

  <div class="block_left_image">
    <div class="block_image">
      <img src="../assets/space.jpg" alt="image" />
    </div>
    <div class="content_block">
      <div class="content_left">
        <h1>Who i am</h1>
        <p class="description">Artist & Photographer</p>
        <p class="text">
          Hi, my name is Martin Vegas. I am an artist and photographer.
          Sollicitudin diam vitae, amet lacus donec eu, donec vulputate duis
          nullam nulla, suscipit nulla orci, ornare maecenas eget gravida. Curae
          sollicitudin lobortis.
        </p>
        <div class="block_icon">
          <ul>
            <li>
              <a title="Folow me on facebook" href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a title="Folow me on twitter" href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a title="Folow me on instagram" href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a title="Email me" href="#">
                <i class="fa fa-envelope-o"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block_left_image{
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
.content_left {
  background-color: var(--main-bgdiv-color);
  margin: auto 0 auto -15%;
  padding: 10% 30% 10% 10%;
  text-align: left;
  border-radius: 4px;
  z-index: 10;
}
.block_icon {
  margin-top: 30px !important;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul > li:first-child {
  margin-left: 0px;
}
li {
  display: inline-block;
  margin: 5px;
}
a {
  font-size: 18px;
  color:var( --dark-border-btn-color);
}
i {
  font-family: "Font Awesome";
  font-weight: 400;
  display: inline-block;
  line-height: 1;
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
</style>
