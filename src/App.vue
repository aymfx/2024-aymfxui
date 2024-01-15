<script setup lang="ts">
import app from "./styles/app.module.css";

console.log(app);

</script>

<template>
  <div>
    <h1 :class="{ [app.app]: true }">adasdas </h1>
    <div class="logo">adas</div>
  </div>
</template>

<style scoped lang="scss">
@import url(./styles/main.css);
</style>
