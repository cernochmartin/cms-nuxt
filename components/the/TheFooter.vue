<script setup lang="ts">
const links = [[{
    label: 'MIT licensed',
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
    <UContainer>
        <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
    </UContainer>
</template>