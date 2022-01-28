<template>
  <div>
    <h2>Stories from Storyblok</h2>
    <pre>{{ state }}</pre>
  </div>
</template>

<script setup lang="ts">
const storyapi = useStoryApi();
const { data } = await storyapi.get('cdn/stories', { version: 'draft' });
const state = reactive({ stories: data.stories });
</script>