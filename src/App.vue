<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AuButton from './components/Button/Button.vue';
import { ButtonInstance } from './components/Button/type';
const buttonRef = ref<ButtonInstance>();
onMounted(() => {
  console.log(buttonRef.value);
});
defineOptions({
  name: 'AuButton',
});
</script>

<template>
  <div>
    <au-button ref="buttonRef" plain disabled>测试button</au-button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
