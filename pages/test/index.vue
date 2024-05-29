<script setup lang="ts">
useSeoMeta({
    title: 'Nuxt CMS | Test',
    description: 'A CMS built with Nuxt 3 and Supabase',
})

const client = useSupabaseClient()

const state = reactive<{
    title: string
    perex: string
    subtitleOne: string
    textSectionOne: string
}>({
    title: '',
    perex: '',
    subtitleOne: '',
    textSectionOne: ''
})

function addSection() {
    console.log('Add section')
}

async function onSubmit() {
    await client
        .from('test')
        .insert(
            {
                title: state.title,
                perex: state.perex,
                slug: state.title.toLowerCase().replace(/ /g, '-'),
                subtitle_one: state.subtitleOne,
                text_section_one: state.textSectionOne
            }
        )
}
</script>

<template>
    <section class="my-24 flex flex-col gap-6"">

        <h2 class=" text-center">Test creating article</h2>

        <UFormGroup label="Title" name="title">
            <UInput name="input" v-model="state.title" />
        </UFormGroup>

        <UFormGroup label="Perex" name="perex">
            <UTextarea name="textarea" v-model="state.perex" />
        </UFormGroup>

        <UFormGroup label="Subtitle 1" name="title">
            <UInput name="input" v-model="state.subtitleOne" />
        </UFormGroup>

        <UFormGroup label="Text section 1" name="perex">
            <UTextarea name="textarea" v-model="state.textSectionOne" />
        </UFormGroup>

        <div class="flex justify-end">
            <UButton @click="addSection()" icon="i-heroicons-plus" size="lg" color="primary" square variant="solid" />
        </div>

        <UButton @click="onSubmit()" block type="submit">
            Submit
        </UButton>

    </section>
</template>