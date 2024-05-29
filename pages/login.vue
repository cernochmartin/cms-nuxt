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

const message = ref<string | null>('')

const isOpen = ref<boolean>(false)

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
            const navigationResult = navigateTo('/')
            if (navigationResult instanceof Promise) {
                navigationResult.then(() => window.location.reload())
            }
        }
    }
    else if (type === 'register') {
        const { data, error } = await client.auth.signUp({
            email: state.email,
            password: state.password
        })
        if (error) {
            message.value = error.message
        }
        else {
            isOpen.value = true
            console.log(data)
        }
    }
}
</script>

<template>
    <section class="my-24 flex flex-col gap-6">

        <h2 class="text-center">{{ isLogin ? 'Login' : 'Register' }}</h2>

        <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton @click="onSubmit(isLogin ? 'login' : 'register')" block type="submit">
            Submit
        </UButton>

        <UButton @click="isLogin = !isLogin; message = null" block type="submit">
            Want to {{ isLogin ? 'register' : 'login' }}?
        </UButton>

        <p v-if="message" class="text-center text-red-500">{{ message }}</p>

        <div @click="isOpen = true">click</div>
    </section>

    <UModal v-model="isOpen">
        <div class="p-4 text-center min-h-48 flex items-center justify-center">
            <div>
                <h3>
                    You have successfully registered
                </h3>
                <p>
                    Please check your email to verify your account
                </p>
            </div>
        </div>
    </UModal>
</template>