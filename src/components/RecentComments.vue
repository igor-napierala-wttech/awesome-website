<script setup></script>

<template>
  <div class="sidebar_infoblock">
    <h3 class="sidebar_infoblock_name">RECENT COMMENTS</h3>
    <ul class="sidebar_infoblock_list">
      <li class="sidebar_infoblock_list_option">
        <div class="sidebar_infoblock_list_div">
          <img
            class="sidebar_infoblock_list_div_img"
            src="../assets/vavtar.jpg"
            alt="avatar"
          />
          <div class="sidebar_infoblock_list_div_text">
            <div class="sidebar_infoblock_list_div_text_author">
              By: Martin Vegas
            </div>
            <div class="sidebar_infoblock_list_div_text_date">May 26, 2016</div>
            <br />
            <div class="sidebar_infoblock_list_div_text_main">
              Aliquet praesent tempor ac dolor aliquet. Risus mi vitae hendrerit
              orci vitae amet lacus tertis maurum...
            </div>
          </div>
        </div>
      </li>

      <li class="sidebar_infoblock_list_option">
        <div class="sidebar_infoblock_list_div">
          <img
            class="sidebar_infoblock_list_div_img"
            src="../assets/vavtar.jpg"
            alt="avatar"
          />
          <div class="sidebar_infoblock_list_div_text">
            <div class="sidebar_infoblock_list_div_text_author">
              By: Martin Vegas
            </div>
            <div class="sidebar_infoblock_list_div_text_date">May 26, 2016</div>
            <br />
            <div class="sidebar_infoblock_list_div_text_main">
              Aliquet praesent tempor ac dolor aliquet. Risus mi vitae hendrerit
              orci vitae amet lacus tertis maurum...
            </div>
          </div>
        </div>
      </li>

      <li class="sidebar_infoblock_list_option">
        <div class="sidebar_infoblock_list_div">
          <img
            class="sidebar_infoblock_list_div_img"
            src="../assets/vavtar.jpg"
            alt="avatar"
          />
          <div class="sidebar_infoblock_list_div_text">
            <div class="sidebar_infoblock_list_div_text_author">
              By: Martin Vegas
            </div>
            <div class="sidebar_infoblock_list_div_text_date">May 26, 2016</div>
            <br />
            <div class="sidebar_infoblock_list_div_text_main">
              Aliquet praesent tempor ac dolor aliquet. Risus mi vitae hendrerit
              orci vitae amet lacus tertis maurum...
            </div>
          </div>
        </div>
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
  width: 100%;
  list-style: none;
  padding-left: 0;
}

.sidebar_infoblock_list_div_img {
  width: 10%;
  float: left;
  border-radius: 100%;
}

.sidebar_infoblock_list_div_text {
  display: inline-block;
  width: calc(90% - 10px);
  margin-left: 10px;
}

.sidebar_infoblock_list_div_text_author {
  font-size: 17px;
}

.sidebar_infoblock_list_div_text_date {
  color: var(--text-color-lightness);
  font-size: 14px;
}

.sidebar_infoblock_list_div_text_main {
  font-size: 14px;
}

.sidebar_infoblock_list_div {
  display: inline-block;
}

.sidebar_infoblock_list_option {
  margin-bottom: 40px;
}
</style>
