<template>
  <div class="preloader">
    <div class="loader-wrap">
      <div class="loader" />
    </div>
    <div class="preloader-img">
      <img src="@/assets/images/logo.svg" alt="logo">
    </div>
  </div>
</template>

<style lang="scss" scoped>

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 9999;
}

.preloader-img {
  @include ctr;

  &::v-deep img {
    width: 132px;
    height: 28px;
    animation: scaleIn 10s infinite;
  }
}

.preloader.hide {
  animation: fadeOut-l 1s forwards .3s;

  .preloader-img {
    animation: fadeOut-l .3s forwards;
  }
}

@keyframes scaleIn {

  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes fadeIn-l {

  0% {
    opacity: 0;
    visibility: hidden;
  }

  5% {
    opacity: 0;
    visibility: visible;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
}

@keyframes fadeOut-l {

  0% {
    opacity: 1;
    visibility: visible;
  }

  95% {
    opacity: 0;
    visibility: visible;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}

.loader-wrap {
  @include ctr;
  width: 350px;
  height: 350px;
  border-radius: 100%;
  background: linear-gradient(165deg, rgba(255,255,255,1) 0%, rgb(220, 220, 220) 40%, rgb(170, 170, 170) 98%, rgb(10, 10, 10) 100%);
  position: relative;
}

.loader::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border-bottom: 0 solid #ffffff05;

  box-shadow:
    0 -10px 20px 20px #ffffff40 inset,
    0 -5px 15px 10px #ffffff50 inset,
    0 -2px 5px #ffffff80 inset,
    0 -3px 2px #ffffffbb inset,
    0 2px 0 #ffffff,
    0 2px 3px #ffffff,
    0 5px 5px #ffffff90,
    0 10px 15px #ffffff60,
    0 10px 20px 20px #ffffff40;
  filter: blur(3px);
  animation: 2s rotate linear infinite;
}

@keyframes rotate {

  100% {
    transform: rotate(360deg)
  }
}
</style>
