<script setup lang="ts">
useSeoMeta({
    title: 'Nuxt CMS | Documanetation',
    description: 'A CMS built with Nuxt 3 and Supabase',
})

const links: any[] = [{
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation'
}, {
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation'
},]
</script>

<template>
    <UVerticalNavigation :links="links" />
</template>