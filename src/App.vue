<script setup lang="ts">
import {usePair} from "./store/module-pair.ts";
import {onMounted, ref} from "vue";

const store = usePair()
const arr = ref<string[]>()

onMounted(store.getPair)

</script>

<template>
  <div class="button-group">
    <button @click="arr = store.response.teacher"> Get Groups</button>
    <button @click="arr = store.response.group"> Get Teachers</button>
  </div>
  <transition-group tag="ul" name="list">
      <li v-for="item in arr" :key="item">{{ item }}</li>
  </transition-group>

</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>