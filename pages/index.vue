<script setup lang="ts">
useSeoMeta({
  title: 'Nuxt CMS',
  description: 'A CMS built with Nuxt 3 and Supabase',
})
</script>

<template>
  <section class="my-24">

    <header class="text-center flex justify-center">
      <div class="md:w-[640px]">
        <h1>Nuxt CMS</h1>
        <p>
          Nuxt CMS is a lightweight free-to-use open-source CMS, which enables you to create simple blog websites fast
          and
          without much trouble.
        </p>

        <div class="mt-6">
          <div class="flex justify-center gap-6">
            <UButton label="Test Nuxt CMS out" to="/test" />
            <UButton label="Install it locally" to="/installation" />
          </div>
        </div>
      </div>
    </header>

  </section>
</template>