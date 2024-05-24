<script setup lang="ts">
const client = useSupabaseClient()

const state = reactive<{
    title: string
    perex: string
}>({
    title: '',
    perex: ''
})

async function onSubmit() {
    await client
        .from('test')
        .insert([
            {
                title: state.title,
                perex: state.perex,
                slug: state.title.toLowerCase().replace(/ /g, '-')
            }
        ])
}
</script>

<template>
    <UFormGroup label="Title" name="title">
        <UInput name="input" v-model="state.title" />
    </UFormGroup>

    <UFormGroup label="Perex" name="perex">
        <UTextarea name="textarea" v-model="state.perex" />
    </UFormGroup>

    <UButton @click="onSubmit()" type="submit">
        Submit
    </UButton>
</template>