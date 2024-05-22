<script setup lang="ts">
const client = useSupabaseClient()

const state = reactive<{
    email: string
    password: string
}>({
    email: '',
    password: ''
})

const isLogin = ref<boolean>(true)

async function onSubmit(type: string) {
    if (type === 'login') {
        await client.auth.signInWithPassword({
            email: state.email,
            password: state.password
        })
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
    <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton @click="onSubmit(isLogin ? 'login' : 'register')" type="submit">
        Submit
    </UButton>

    <UButton @click="isLogin = !isLogin" type="submit">
        Want to {{ isLogin ? 'register' : 'login' }}?
    </UButton>
</template>