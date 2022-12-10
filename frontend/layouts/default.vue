<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/nullstyle.scss';
.wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }
</style>