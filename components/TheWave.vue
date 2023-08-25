<template>
  <div class="wave" fixed w-full h-auto z--999 top-0 left-0 bottom-0 right-0 />
</template>

<style scoped lang="scss">
.wave {
  overflow: hidden;
  background: #5b86e5;
  background: linear-gradient(to right, #5b86e5, #a6e8ed);

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 300vw;
    min-height: 300vw;
    background-color: #fff;
    animation-iteration-count: infinite;
    animation-name: rotate;
    animation-timing-function: linear;
  }

  &:before {
    bottom: 3vh;
    border-radius: 46%;
    animation-duration: 10s;
  }

  &:after {
    bottom: 1vh;
    border-radius: 48%;
    animation-duration: 10s;
    opacity: .6;
  }
}

@keyframes rotate {
  0% {
    transform: translate(-50%, 0%) rotateZ(0deg);
  }

  50% {
    transform: translate(-50%, -2%) rotateZ(180deg);
  }

  100% {
    transform: translate(-50%, 0%) rotateZ(360deg);
  }
}
</style>
