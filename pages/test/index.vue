<script setup lang="ts">
useSeoMeta({
    title: 'Nuxt CMS | Test',
    description: 'A CMS built with Nuxt 3 and Supabase',
})

const client = useSupabaseClient()

const { data: { user } } = await client.auth.getUser()

const message = ref<string>('')

const isOpen = ref<boolean>(false)

const state = reactive<{
    title: string
    perex: string
    sections: Array<{ subtitle: string, text: string }>
    allowComments: boolean
}>({
    title: '',
    perex: '',
    sections: [],
    allowComments: true
})

function addSection() {
    state.sections.push({
        subtitle: '',
        text: ''
    })
    message.value = ''
}

const slug = computed(() => {
    return state.title.toLowerCase().replace(/ /g, '-')
})

async function onSubmit() {
    if (state.title.length === 0 || state.perex.length === 0) {
        message.value = 'Please fill in all the required fields'
    }
    else {
        await client
            .from('test')
            .insert([
                {
                    title: state.title,
                    perex: state.perex,
                    slug: slug.value,
                    sections: state.sections,
                    comments_allowed: state.allowComments,
                    author: user?.email
                }
            ]).then(() => {
                isOpen.value = true
            })
    }
}

const { data } = await client.from('test').select()

const links: any[] = []

data?.forEach((item: any) => {
    links.push({ label: item.title, icon: 'i-heroicons-book-open', to: `/test/${item.slug}` })
})
</script>

<template>

    <section v-if="!user" class="flex flex-col gap-6 h-[100vh] justify-center items-center text-center">

        <div>
            <h2>Ooops...</h2>
            <h3>You should be logged in before creating an article</h3>
        </div>

        <div class="md:w-[540px]">
            <UButton to="/login" block type="submit">
                Go to login page
            </UButton>
        </div>

    </section>

    <section v-else class="my-24 flex flex-col gap-6">

        <UVerticalNavigation :links="links" />

        <h2 class="text-center">Test creating article</h2>

        <UFormGroup label="Title*">
            <UInput v-model="state.title" />
        </UFormGroup>

        <UFormGroup label="Perex*">
            <UTextarea v-model="state.perex" />
        </UFormGroup>

        <div v-for="(section, index) in state.sections" :key="index" class="flex flex-col gap-6">
            <UFormGroup :label="'Subtitle ' + (index + 1)">
                <UInput v-model="section.subtitle" />
            </UFormGroup>

            <UFormGroup :label="'Text section ' + (index + 1)">
                <UTextarea v-model="section.text" />
            </UFormGroup>
        </div>

        <div class="flex justify-end">
            <div class="flex gap-6 items-center">
                <UTooltip :text="state.allowComments ? 'Comments allowed' : 'Comments not allowed'">
                    <UToggle v-model="state.allowComments" />
                </UTooltip>
                <UTooltip text="Add new section of the article">
                    <UButton @click="addSection()" icon="i-heroicons-plus" size="lg" color="primary" square
                        variant="solid" />
                </UTooltip>
            </div>
        </div>

        <UButton @click="onSubmit()" block type="submit">
            Submit
        </UButton>

        <p v-if="message" class="text-center text-red-500">{{ message }}</p>

    </section>

    <UModal v-model="isOpen">
        <div class="p-6 text-center min-h-48 flex items-center justify-center">
            <div>
                <h3>
                    You have successfully created a new article
                </h3>
                <p class="mt-6">
                    You can check your article {{ state.title }} here: <ULink :to="`/test/${slug}`"
                        active-class="text-primary" target="_blank"
                        inactive-class="whitespace-nowrap text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                        {{ slug }}</ULink>
                </p>
            </div>
        </div>
    </UModal>
</template>