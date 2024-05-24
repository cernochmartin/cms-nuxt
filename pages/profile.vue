<script setup lang="ts">
const client = useSupabaseClient()

const state = reactive<{
    newPassword: string
    newPasswordCheck: string
}>({
    newPassword: '',
    newPasswordCheck: ''
})

async function onSubmit() {
    if (state.newPassword === state.newPasswordCheck && state.newPassword.length > 0) {
        await client.auth.updateUser({
            password: state.newPassword
        })
    }
    else {
        console.log('Passwords do not match')
    }
}
</script>

<template>
    <UFormGroup label="New password" name="password">
        <UInput v-model="state.newPassword" type="password" />
    </UFormGroup>

    <UFormGroup label="Password check" name="password">
        <UInput v-model="state.newPasswordCheck" type="password" />
    </UFormGroup>

    <UButton @click="onSubmit()" type="submit">
        Submit
    </UButton>
</template>