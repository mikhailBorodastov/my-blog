<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <div class="tags-line">
      <span v-for="tag in post.tags" :key="tag">
      <router-link :to="{ name: 'Tags', params: { tag: tag }}">
      #{{ tag }}
      </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "SinglePost",
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.length > 100 ? props.post.body.substring(0, 100) + '...' : props.post.body
    })

    return {snippet}
  }
}
</script>

<style scoped>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}

.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}

.post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #50e19d;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}

.tags-line {
  display: flex;
  gap: 10px;
}

</style>