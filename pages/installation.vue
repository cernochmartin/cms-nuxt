<script setup lang="ts">
useSeoMeta({
    title: 'Nuxt CMS | Installation',
    description: 'A CMS built with Nuxt 3 and Supabase',
})
</script>

<template>
    <section class="mt-24">

        <h2 class="text-center">Installation and setup</h2>
        <ul class="mt-6">
            <li>You need to have <ULink to="https://git-scm.com/downloads" active-class="text-primary" target="_blank"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    git</ULink>, <ULink to="https://nodejs.org/en/download/package-manager" active-class="text-primary"
                    target="_blank"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    Node.js</ULink>, and
                <ULink to="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"
                    active-class="text-primary" target="_blank"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    any package manager</ULink> installed.
            </li>
            <li>To install Nuxt CMS locally, simply run
                <code>git clone https://github.com/cernochmartin/nuxt-cms</code> in your terminal or download the
                repository as a ZIP file here: <ULink to="https://github.com/cernochmartin/nuxt-cms"
                    active-class="text-primary" target="_blank"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    GitHub repository</ULink>.
            </li>
            <li>Once installed, go to the root of the project and install the dependencies with your package manager
                installation script, for example with npm, run:
                <code>npm install</code>.
            </li>
            <li>Next, head over to the <ULink to="https://supabase.com" active-class="text-primary"
                    target="_blank"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    Supabase website</ULink> and create a project. Once you create a project, pick the project URL and
                anon_key and paste it into and ENV file in your local project like this: <code>
                    SUPABASE_URL=&lt;url&gt;</code> and <code>SUPABASE_KEY=&lt;key&gt;</code>. See here: <ULink
                    to="https://github.com/cernochmartin/nuxt-cms/blob/main/.env.example" active-class="text-primary" target="_blank"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    ENV example</ULink>.
            </li>
            <li>Now that you are all set, you can start using Nuxt CMS!</li>
        </ul>

    </section>
</template>

<style scoped>
ul {
  list-style-type: number;
}
</style>