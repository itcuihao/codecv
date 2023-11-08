<script setup lang="ts">
import { useDark } from '@vueuse/core'
import avatar1 from '@/assets/svg/avataaars1.svg'

const isDark = useDark()
</script>

<template>
  <div class="logo" @click="$router.replace('/home')" data-aos="slide-right">
    <avatar1 />
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
