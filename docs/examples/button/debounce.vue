<template>
  <AuButton type="primary" :debounce-wait="2000" @click="handleClick">
    防抖按钮
  </AuButton>
  <div>点击{{ count }}次</div>
</template>

<script setup lang="ts">
import { AuButton } from 'aymfx-ui'
import { ref } from 'vue'

const count = ref(0)

const handleClick = () => {
  count.value++
}
</script>
