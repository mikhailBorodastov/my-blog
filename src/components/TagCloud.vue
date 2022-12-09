<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
        <router-link
            :to="currentRoute.params.tag === tag ?
            { name: 'Home'}  :
            { name: 'Tags', params: { tag }}
            "
            :class="currentRoute.params.tag === tag ? 'router-link-active' : 'norm'"
            >
          # {{tag}}
        </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import useTags from "@/composables/useTags";
import { useRoute } from "vue-router"

export default {
  name: "TagCloud",
  props: ['posts'],
  setup(props){

    const { tags } = useTags(props.posts)

    const currentRoute = useRoute()


    return { tags, currentRoute}

  }
}
</script>

<style scoped>
 .tag-cloud {
   padding: 10px;
 }

 .tag-cloud h3 {
   border-bottom: 1px solid #eee;
 }

 .tag-cloud div {
   display: inline-block;
   padding: 10px;
 }

 .tag-cloud a {
   color: #ccc;
   text-decoration: none;
 }

 .tag-cloud a.router-link-active {
   color: #50e19d;
   font-weight: bold;
 }
</style>