<script setup lang="ts">
interface DataType {
    title: string
    slug: string
    perex: string
    sections: Array<{ subtitle: string, text: string }>
    comments: Array<{ comment: string, reply: Array<{ name: string, message: string }> }>
    comments_allowed: boolean
    author: string
}

const client = useSupabaseClient()

const slug = useRoute().path.split('/').pop() || ''

const { data } = await client.from('test').select().eq('slug', slug)

const fetchedItems = data as DataType[]

useSeoMeta({
    title: 'Nuxt CMS | ' + fetchedItems[0].title,
    description: fetchedItems[0].perex
})

const state = reactive<{
    comments: Array<{ comment: string, reply: Array<{ name: string, message: string }> }>
}>({
    comments: [
        {
            comment: '',
            reply: [
                {
                    name: '',
                    message: ''
                }
            ]
        }
    ]
})

async function onSubmit() {
    await client
        .from('test')
        .update([{ comments: state.comments }])
        .eq('slug', slug)
}

const isReplyActive = ref<boolean>(false)
</script>

<template>

    <section v-for="item in fetchedItems" class="my-24">

        <div class="flex flex-col gap-6">
            <h2 class="text-center">{{ item.title }}</h2>
            <p>{{ item.perex }}</p>
        </div>

        <div v-for="section in item.sections" class="mt-12 flex flex-col gap-6">
            <h3 class="text-center">{{ section.subtitle }}</h3>
            <p>{{ section.text }}</p>
        </div>

        <div class="mt-12">
            <ULink :to="`mailto:${item.author}`" active-class="text-primary" target="_blank"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                {{ item.author }}
            </ULink>
        </div>

        <div v-if="item.comments_allowed === true" class="flex flex-col gap-6 mt-24">
            <h2 class="text-center">Comments</h2>
            <UFormGroup label="Leave your thoughts">
                <UTextarea v-model="state.comments[0].comment" />
            </UFormGroup>

            <UButton @click="onSubmit()" block type="submit">
                Submit
            </UButton>
        </div>

        <div v-for="comment in item.comments" class="mt-12">
            <p>{{ comment.comment }}</p>
            <ULink @click="isReplyActive = !isReplyActive" active-class="text-primary"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Reply
            </ULink>

            <div v-if="isReplyActive === true" class="flex flex-col gap-6 mt-6">
                <UFormGroup>
                    <UTextarea v-model="state.comments[0].reply" />
                </UFormGroup>

                {{ state.comments[0].reply[0].message }}

                <UButton @click="onSubmit()" block type="submit">
                    Submit
                </UButton>
            </div>

            <p>{{ comment.reply }}</p>
        </div>

    </section>

</template>