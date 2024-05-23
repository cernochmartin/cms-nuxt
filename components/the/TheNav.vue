<script setup lang="ts">
const client = useSupabaseClient()

const { data: { user } } = await client.auth.getUser()

const links = [[user?.email ? {
  badge: user.email,
  icon: 'i-heroicons-user',
  to: '/profile'
} : {},
{
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
  }]]

// if (user?.email) {
//   links[1].forEach((item: any) => {
//     item.push({
//       label: 'Logout',
//       icon: 'i-heroicons-arrow-right-end-on-rectangle'
//     })
//   })
// }
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>
