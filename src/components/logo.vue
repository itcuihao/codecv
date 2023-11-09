<script setup lang="ts">
import { useDark } from '@vueuse/core'
// import cv from '@/assets/svg/cv.svg'

const isDark = useDark()
</script>

<template>
  <div class="logo" @click="$router.replace('/home')" data-aos="slide-right">
    <img src="@/assets/svg/cv8.svg" width="80" height="60" />
  </div>
</template>

<style lang="scss" socped>
.logo {
  line-height: 0;
  svg {
    width: 80px;
    height: 60px;
    transform: scale(1.5);
  }
}
</style>
