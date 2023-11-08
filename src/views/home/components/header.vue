<script setup lang="ts">
import { homeNav } from '@/common/nav/homeNav'
import Reward from '@/components/reward.vue'
// import { homeNav, homeOutNav } from '@/common/nav/homeNav'
// import Logo from '@/components/logo.vue'
import ThemeToggle from '@/components/themeToggle.vue'
import { useSwitch } from '@/common/global'
// function toOutNav(path: string) {
//   window.location.href = path
// }
const { open, toggle } = useSwitch()
</script>

<template>
  <div id="header" class="noto-serif-sc">
    <!-- <Logo /> -->
    <ul class="nav" data-aos="zoom-out-right">
      <li v-for="(navItem, idx) in homeNav" :key="idx">
        <router-link v-if="!navItem.tooltip" :to="navItem.path || ''">{{
          navItem.name
        }}</router-link>
      </li>
      <!-- <li v-for="(navItem, idx) in homeOutNav" @click="toOutNav(navItem.path)" :key="idx">
        <i :class="navItem.icon" :style="{ color: navItem.color }" />
        {{ navItem.name }}
      </li> -->
    </ul>
    <!-- <div class="operator" data-aos="zoom-out-left"> -->
    <div class="operator">
      <Reward />
      <el-tooltip content="问题反馈" placement="bottom-end">
        <i class="iconfont icon-comment problem font-25" @click="toggle"></i>
      </el-tooltip>
      &nbsp;
      <theme-toggle />
    </div>
    <Contact :open="open" @toggle="toggle" />
  </div>
</template>

<style lang="scss" scoped>
#header {
  position: absolute;
  top: 20px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  font-weight: bolder;
}
</style>
