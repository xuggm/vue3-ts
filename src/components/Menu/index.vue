<template>
  <div class="menu">
    <ul>
      <li v-for="(item) in menu">
        <MenuItem :data="item" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import menu from './routes'
import MenuItem from './MenuItem.vue'

</script>

<style scoped>
.menu {
  height: 100%;
  width: 300px;
  flex: none;
  background: #aaa;
}
</style>