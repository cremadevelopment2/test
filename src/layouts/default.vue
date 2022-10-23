<template>
  <div class="layout-container" :class="$route.path === '/ido' ? 'layout-fair' : ''">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {}
})
</script>
