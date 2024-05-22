<script setup lang="ts">
const links = [[{
  badge: 'Černoch Martin'
}, {
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Test',
  icon: 'i-heroicons-chart-bar',
  to: '/test'
}, {
  label: 'Installation',
  icon: 'i-heroicons-command-line',
  to: '/installation'
}, {
  label: 'Documentation',
  icon: 'i-heroicons-document',
  to: '/docs'
}], [
  {
    label: 'Login',
    icon: 'i-heroicons-arrow-right-end-on-rectangle',
    to: '/login'
  }
]]
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>

