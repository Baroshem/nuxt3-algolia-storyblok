<template>
  <div>
    <h2>Result from Algolia</h2>
    <p>{{ result }}</p>
  </div>
</template>


<script setup lang="ts">
const { result, search } = useSearch('storyblok')

onMounted(async () => {
  await search({ query: 'Test' });
})
</script>