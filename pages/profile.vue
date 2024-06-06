<script setup lang="ts">
useSeoMeta({
    title: 'Nuxt CMS | Profile',
    description: 'A CMS built with Nuxt 3 and Supabase',
})

const client = useSupabaseClient()

const state = reactive<{
    newPassword: string
    newPasswordCheck: string
}>({
    newPassword: '',
    newPasswordCheck: ''
})

const message = ref<string>('')

const isOpen = ref<boolean>(false)

async function onSubmit() {
    if (state.newPassword === state.newPasswordCheck && state.newPassword.length > 0) {
        await client.auth.updateUser({
            password: state.newPassword
        }).then(() => {
            isOpen.value = true
        })
    }
    else {
        message.value = 'Passwords do not match'
    }
}

async function onLogin() {
    const { error } = await client.auth.signOut()
    if (error) {
        message.value = error.message
    }
    else {
        const navigationResult = navigateTo('/login')
        if (navigationResult instanceof Promise) {
            navigationResult.then(() => window.location.reload())
        }
    }
}
</script>

<template>
    <section class="my-24 flex flex-col gap-6">

        <h2 class="text-center">Profile password change</h2>

        <UFormGroup label="New password" name="password">
            <UInput v-model="state.newPassword" type="password" />
        </UFormGroup>

        <UFormGroup label="Password check" name="password">
            <UInput v-model="state.newPasswordCheck" type="password" />
        </UFormGroup>

        <UButton @click="onSubmit()" block type="submit">
            Submit
        </UButton>

        <p class="text-center text-red-500">{{ message }}</p>
    </section>

    <UModal v-model="isOpen">
        <div class="p-6 text-center min-h-48 flex items-center justify-center">
            <div>
                <h3>
                    You have successfully changed your password
                </h3>
                <UButton @click="onLogin()" block type="submit" class="mt-6">
                    Login again
                </UButton>
            </div>
        </div>
    </UModal>
</template>