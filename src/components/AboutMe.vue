<script setup></script>

<template>
  <div class="sidebar_infoblock">
    <h3 class="sidebar_infoblock_name">ABOUT ME</h3>
    <div class="sidebar_infoblock_content">
      <div class="sidebar_infoblock_content_avatar">
        <img
          src="../assets/vavtar.jpg"
          class="sidebar_infoblock_content_avatar_img"
          alt="avatar"
        />
      </div>
      <div class="sidebar_infoblock_content_author">
        MARTIN VEGAS<br /><span class="sidebar_infoblock_content_author_roles"
          >Artist & Photographer</span
        ><br />

        <span class="sidebar_infoblock_content_maintext"
          >Debitis sociis phasellus feugiat luctus diam. Vitae aenean odio
          ligula interdum suscipit volutpat eu fusce hac...
        </span>
      </div>
    </div>
    <div class="sidebar_infoblock_footer">
      <a class="sidebar_infoblock_footer_link" href="#">Read more...</a>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: var(--font-family-text);
}

.sidebar_infoblock_content {
  display: flex;
}
.sidebar_infoblock {
  padding: 20px;
  width: calc(100% - 40px);
  display: block;
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

.sidebar_infoblock_content {
  width: 100%;
}
.sidebar_infoblock_content_avatar {
  width: 25%;
}

.sidebar_infoblock_content_avatar_img {
  width: 100%;
  border-radius: 100%;
}

.sidebar_infoblock_content_author {
  text-align: left;
  padding-left: 15px;
  width: calc(75% - 15px);
  color: var(--text-color-darkness);
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 20px;
}
.sidebar_infoblock_content_author_roles {
  color: var(--text-color-lightness);
  font-size: 14px;
  font-weight: 400;
}
.sidebar_infoblock_content_maintext {
  font-size: 14px;
  text-align: left;
  width: calc(70% - 30px);
  padding-left: 15px;
  color: var(--text-color-light);
}

.sidebar_infoblock_footer {
  width: 90%;
  text-align: right;
}

.sidebar_infoblock_footer_link {
  font-size: 14px;
  text-decoration: none;
  color: var(--text-color-lightness);
}
</style>
