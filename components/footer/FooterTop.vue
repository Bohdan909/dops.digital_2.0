<template>
  <div class="footer-top row">
    <div class="col-tablet-4 off-tablet-2 col-mob-10">
      <TextElement
        class="footer-top-text text-primary text-color-d"
        text="Tell us about the tasks we will promptly contact:"
      />

      <div class="footer-top-logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.footer-top {
  position: relative;
  min-height: 81px;
  padding: 23px 0 10px;

  @media (min-width: 768px) and (max-height: 669px) {
    min-height: 50px;
    padding: 10px 0;
  }
}

.footer-top-text {
  width: 250px;
}

.footer-top-logo {
  @include ctr-vert;
  position: absolute;
  right: 5px;
  width: 46px;
  height: 46px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NiIgaGVpZ2h0PSI0NiIgdmlld0JveD0iMCAwIDQ2IDQ2Ij48Zz48Zz48cGF0aCBmaWxsPSIjZWUyOTEyIiBkPSJNMCAyM0MwIDEwLjI5NyAxMC4yOTcgMCAyMyAwczIzIDEwLjI5NyAyMyAyMy0xMC4yOTcgMjMtMjMgMjNTMCAzNS43MDMgMCAyM3oiLz48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDIzIDIzKSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMwLjQzMiAzNi4yMjFjLjMxMi4zMTMuNjg3LjM3NSAxLjA2MyAwbDMuMTg4LTMuMTg4Yy4zMTMtLjMxMy4zMTMtLjY4OCAwLTFsLTcuODE1LTcuODE2Yy0uOTM4LS45MzgtLjkzOC0xLjgxMyAwLTIuNjI2bDcuODE1LTcuODE1Yy4zMTMtLjMxMy4zMTMtLjY4OCAwLTFsLTMuMTg5LTMuMTg5Yy0uMzc1LS4zNzUtLjc1LS4zMTMtMS4wNjIgMGwtNS40NCA1LjQ0Yy0uMzc1LjM3NC0uNS42ODctLjUgMS4yNVYyOS41M2MwIC41NjMuMTI1Ljg3Ni41IDEuMjV6bS0xNS45NDMgMGMuMzc1LjM3NS43NS4zMTMgMS4wNjIgMGw1LjQ0LTUuNDRjLjM3NS0uMzc0LjUtLjY4Ny41LTEuMjVWMTYuMjc3YzAtLjU2My0uMTI1LS44NzYtLjUtMS4yNWwtNS40NC01LjQ0Yy0uMzEyLS4zMTMtLjY4Ny0uMzc1LTEuMDYyIDBMMTEuMyAxMi43NzZjLS4zMTMuMzEyLS4zMTMuNjg3IDAgMWw3LjgxNSA3LjgxNWMuOTM4LjgxMy45MzggMS42ODggMCAyLjYyNkwxMS4zIDMyLjAzMmMtLjMxMy4zMTMtLjMxMy42ODggMCAxeiIvPjwvZz48L2c+PC9zdmc+");
  background-size: 100% 100%;
}

@include mobile {

  .footer-top {
    min-height: 100%;
    padding: 20px 0 17px;
  }

  .footer-top-text {
    width: 200px;
  }
}
</style>
