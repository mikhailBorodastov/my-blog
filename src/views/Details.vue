<template>
  <div v-if="error">{{error}}</div>
  <div v-if="post" class="post">
    <h3>{{post.title}}</h3>
    <p class="pre">{{post.body}}</p>
    <button @click="handleClick" class="delete">Delete post</button>
  </div>
  <div v-else>
    <Spinner/>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
import Spinner from "@/components/Spinner"
import { useRoute, useRouter } from 'vue-router'
import {projectFirestore} from "@/firebase/config";

export default {
  props: ['id'],
  components: {Spinner},
  name: "Details",
  setup(props) {
    const route = useRoute()
    const router = useRouter()

    const {post, error, load} = getPost(route.params.id)

    load()

    const handleClick = async () => {
      await projectFirestore.collection('posts')
          .doc(props.id)
          .delete()
      router.push('/')
    }

    return {post, error, handleClick}
  }
}
</script>

<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }

  .pre {
    white-space: pre-wrap;
  }

  button {
    background-color: #50e19d;
    font-weight: bold;
    color: white;
    align-self: center;
    outline: none;
    border: none;
    padding: 15px;
    margin: 10px auto;
    cursor: pointer;
  }
  button:hover {
    background-color: #3ec988;
  }
</style>