<template>
  <div v-if="menuData.children && menuData.children.length">
    <ul>
      <li v-for="(item) in menuData.children">
        <menu-item :data="item" />
      </li>
    </ul>
  </div>
  <div v-else>
    <router-link :to="menuData.path">
      {{ menuData.name }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import type { MenuItem } from './routes'
const props = defineProps<{ data: MenuItem }>()

let menuData = props.data


</script>

<style scoped>
</style>