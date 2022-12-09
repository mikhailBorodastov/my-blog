<template>
  <div class="tag">
    <div v-if="posts.length" class="layout">
      <PostList :posts="tagPosts"/>
      <TagCloud :posts="posts"/>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner";
import PostList from "@/components/PostList";
import TagCloud from "@/components/TagCloud";
import {useRoute} from "vue-router/dist/vue-router";
import getPosts from "@/composables/getPosts";
import {computed} from "vue";

export default {
  name: "Tag",
  components: {Spinner, PostList, TagCloud},

  setup() {
    const route = useRoute()
    const {posts, error, load} = getPosts()

    load()


    const tagPosts = computed(() => {
      return posts.value.filter(post => post.tags.includes(route.params.tag))
    })

    return {posts, error, tagPosts}
  }
}
</script>

<style scoped>

.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

</style>