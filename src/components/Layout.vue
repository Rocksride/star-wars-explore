<template>
  <div class=' is-paddingless is-marginless'>
    <slot name="nav"></slot>
    <section class=" section img-container video-container is-dark" style='min-height: 92vh;'>
      <!-- <div class="bg-video">
        <video class="bg-video__content" autoplay muted loop>
          <source src="@/assets/videos/star.mp4" type="video/mp4">
          <source src="@/assets/videos/star.webm" type="video/webm">
          Your Browser is not supported
        </video>
      </div> -->
      <slot name="content"></slot>
    </section>
    <slot name="footer"></slot>
  </div>
</template>


<style scoped>
  .img-container {
    height: 100%;
    width: 100%;

    background-image: url(../assets/pic1.jpg);
    background-size: cover;
    background-position: top;
  }
  .video-container {
    padding: 30px;
    overflow: hidden;
    position: relative;
  }
  .bg-video {
    display:none;
    background: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    opacity: .55;
  }

  .bg-video__content {
    background-size: cover;
    width: 100%;
    /* height: 100%; */
  }
</style>
