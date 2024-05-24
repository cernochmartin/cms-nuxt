<script setup lang="ts">
const year = new Date().getFullYear()

const links = [[{
    label: `${year} - MIT licensed`,
    to: 'https://github.com/cernochmartin/nuxt-cms/blob/main/LICENSE'
}],
[{
    label: 'Contact me',
    icon: 'i-heroicons-envelope',
    to: 'mailto:cernochm@outlook.cz'
}]]
</script>

<template>
    <UDivider label="Nuxt CMS" />
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800 px-[320px]" />
</template>