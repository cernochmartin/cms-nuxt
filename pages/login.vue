<script setup lang="ts">
useSeoMeta({
  title: 'Nuxt CMS | Login',
  description: 'A CMS built with Nuxt 3 and Supabase',
})

const client = useSupabaseClient()

const state = reactive<{
    email: string
    password: string
}>({
    email: '',
    password: ''
})

const isLogin = ref<boolean>(true)

const message = ref<string>('')

async function onSubmit(type: string) {
    if (type === 'login') {
        const { error } = await client.auth.signInWithPassword({
            email: state.email,
            password: state.password
        })
        if (error) {
            message.value = error.message
        }
        else {
            navigateTo('/').then(() => window.location.reload())
        }
    }
    else if (type === 'register') {
        await client.auth.signUp({
            email: state.email,
            password: state.password
        })
    }
}
</script>

<template>
    <section class="mt-24 flex flex-col gap-6">
        <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <div class="flex gap-6">
            <UButton @click="onSubmit(isLogin ? 'login' : 'register')" type="submit">
                Submit
            </UButton>

            <UButton @click="isLogin = !isLogin" type="submit">
                Want to {{ isLogin ? 'register' : 'login' }}?
            </UButton>
        </div>

        <p v-if="message" class="text-red-500">{{ message }}</p>
    </section>
</template>