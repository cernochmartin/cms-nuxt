<script setup lang="ts">
useSeoMeta({
    title: 'Nuxt CMS | Test',
    description: 'A CMS built with Nuxt 3 and Supabase',
})

const client = useSupabaseClient()

const isOpen = ref<boolean>(false)

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

const slug = computed(() => {
    return state.title.toLowerCase().replace(/ /g, '-')
})

async function onSubmit() {
    await client
        .from('test')
        .insert([
            {
                title: state.title,
                perex: state.perex,
                slug: slug.value,
                subtitle_one: state.subtitleOne,
                text_section_one: state.textSectionOne
            }
        ]).then(() => {
            isOpen.value = true
        })
}
</script>

<template>
    <section class="my-24 flex flex-col gap-6"">

        <h2 class=" text-center">Test creating article</h2>

        <UFormGroup label="Title">
            <UInput v-model="state.title" />
        </UFormGroup>

        <UFormGroup label="Perex">
            <UTextarea v-model="state.perex" />
        </UFormGroup>

        <UFormGroup label="Subtitle 1">
            <UInput v-model="state.subtitleOne" />
        </UFormGroup>

        <UFormGroup label="Text section 1">
            <UTextarea v-model="state.textSectionOne" />
        </UFormGroup>

        <div class="flex justify-end">
            <UButton @click="addSection()" icon="i-heroicons-plus" size="lg" color="primary" square variant="solid" />
        </div>

        <UButton @click="onSubmit()" block type="submit">
            Submit
        </UButton>

    </section>

    <UModal v-model="isOpen">
        <div class="p-6 text-center min-h-48 flex items-center justify-center">
            <div>
                <h3>
                    You have successfully created a new article
                </h3>
                <p class="mt-6">
                    You can check your article {{ state.title }} here: <ULink
                        :to="`/test/${slug}`"
                        active-class="text-primary" target="_blank"
                        inactive-class="whitespace-nowrap text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                     {{ slug }}</ULink>
                </p>
            </div>
        </div>
    </UModal>
</template>