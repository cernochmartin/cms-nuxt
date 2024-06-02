<script setup lang="ts">
useSeoMeta({
    title: 'Nuxt CMS | Documanetation',
    description: 'A CMS built with Nuxt 3 and Supabase',
})

const links: any[] = [{
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/docs/overview'
}, {
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/docs/'
},]
</script>

<template>
    <UVerticalNavigation :links="links" />
</template>