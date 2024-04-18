<script setup lang="ts">
const links = [{
  label: 'Profile',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/100514868?v=4'
  },
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
}]
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>

