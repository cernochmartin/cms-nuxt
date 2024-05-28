<script setup lang="ts">
useSeoMeta({
  title: 'Nuxt CMS | Documanetation',
  description: 'A CMS built with Nuxt 3 and Supabase',
})

const client = useSupabaseClient()

const { data } = await client.from('docs').select()

const links: any[] = []

data?.forEach((doc: any) => {
    links.push({
        label: doc.title,
        to: `/docs/${doc.slug}`,
    })
})
</script>

<template>
    <UVerticalNavigation :links="links" />
</template>