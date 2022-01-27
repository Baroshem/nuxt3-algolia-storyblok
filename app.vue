<template>
  <div>
    <p v-for="story in stories" :key="story.id">{{ story.name }}</p>
    {{ result }}
    <NuxtWelcome />
  </div>
</template>

<script setup>
const { result, search } = useSearch('test_index') // pass your index as param

const storyapi = useStoryApi();
const { data } = await storyapi.get("cdn/stories", { version: "draft" });
const state = reactive({ stories: data.story });

onMounted(async () => {
  await search({ query: 'Samsung' });
  useStoryBridge(state.story.id, story => (state.story = story));
})
</script>
