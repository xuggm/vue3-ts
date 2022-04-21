<template>
  <div class="layout">
    <Menu></Menu>
    <div class="layout-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu } from '../index'
</script>

<style scoped>
.layout {
  height: 100%;
  display: flex;

}
</style>