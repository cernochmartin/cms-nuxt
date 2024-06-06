<script setup lang="ts">
const client = useSupabaseClient()

const { data: { user } } = await client.auth.getUser()

const links = [[user ? {
  badge: user.email,
  icon: 'i-heroicons-user',
  to: '/profile'
} : {
  badge: 'Guest',
  icon: 'i-heroicons-user',
},
{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Test creating article',
  icon: 'i-heroicons-chart-bar',
  to: '/test'
}, {
  label: 'Installation',
  icon: 'i-heroicons-command-line',
  to: '/installation'
},
//  {
  // label: 'Documentation',
  // icon: 'i-heroicons-document',
  // to: '/docs'
// }
], [user ? {
  label: 'Logout',
  icon: 'i-heroicons-arrow-right-end-on-rectangle',
  click: async () => {
    await client.auth.signOut()
      .then(() => {
        navigateTo('/')
        window.location.reload()
      })
      .catch((error) => {
        console.error('error', error)
      })
  }
} : {
  label: 'Login',
  icon: 'i-heroicons-arrow-right-end-on-rectangle',
  to: '/login'
}]]
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>
